import { defineRelations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  snakeCase,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// USER

export const user = snakeCase.table("user", {
  id: integer()
    .primaryKey()
    .generatedAlwaysAsIdentity(),

  name: text()
    .notNull(),

  email: text()
    .notNull()
    .unique(),

  emailVerified: boolean()
    .default(false)
    .notNull(),

  image: text(),

  createdAt: timestamp()
    .defaultNow()
    .notNull(),

  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// SESSION

export const session = snakeCase.table("session", {
  id: integer()
    .primaryKey()
    .generatedAlwaysAsIdentity(),

  expiresAt: timestamp()
    .notNull(),

  token: text()
    .notNull()
    .unique(),

  createdAt: timestamp()
    .defaultNow()
    .notNull(),

  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),

  ipAddress: text(),

  userAgent: text(),

  userId: integer()
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),
}, table => [
  index("session_userId_idx").on(table.userId),
]);

// ACCOUNT

export const account = snakeCase.table("account", {
  id: integer()
    .primaryKey()
    .generatedAlwaysAsIdentity(),

  issuer: text()
    .notNull(),

  accountId: text()
    .notNull(),

  providerId: text()
    .notNull(),

  userId: integer()
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),

  accessToken: text(),

  refreshToken: text(),

  idToken: text(),

  accessTokenExpiresAt: timestamp(),

  refreshTokenExpiresAt: timestamp(),

  scope: text(),

  password: text(),

  createdAt: timestamp()
    .defaultNow()
    .notNull(),

  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
}, table => [
  uniqueIndex("account_issuer_accountId_uidx").on(
    table.issuer,
    table.accountId,
  ),

  index("account_userId_idx").on(table.userId),
]);

// VERIFICATION

export const verification = snakeCase.table("verification", {
  id: integer()
    .primaryKey()
    .generatedAlwaysAsIdentity(),

  identifier: text()
    .notNull(),

  value: text()
    .notNull(),

  expiresAt: timestamp()
    .notNull(),

  createdAt: timestamp()
    .defaultNow()
    .notNull(),

  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
}, table => [
  index("verification_identifier_idx").on(
    table.identifier,
  ),
]);

// RELATIONS

export const relations = defineRelations(
  {
    user,
    session,
    account,
    verification,
  },
  r => ({
    user: {
      sessions: r.many.session(),
      accounts: r.many.account(),
    },

    session: {
      user: r.one.user({
        from: r.session.userId,
        to: r.user.id,
      }),
    },

    account: {
      user: r.one.user({
        from: r.account.userId,
        to: r.user.id,
      }),
    },
  }),
);

import { integer, real, snakeCase, timestamp, varchar } from "drizzle-orm/pg-core";

import { user } from "./auth-schema";

export const location = snakeCase.table ("location", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull(),
  latitude: real().notNull(),
  longitude: real().notNull(),
  userId: integer().notNull().references(() => user.id),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const locationLog = snakeCase.table("locationLog", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  startedAt: timestamp({ withTimezone: true }).notNull(),
  endedAt: timestamp({ withTimezone: true }).notNull(),
  latitude: real().notNull(),
  longitude: real().notNull(),
  locationId: integer().notNull().references(() => location.id),
  userId: integer().notNull().references(() => user.id),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const locationLogImage = snakeCase.table("locationLogImage", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  key: varchar({ length: 255 }).notNull(),
  locationLogId: integer().notNull().references(() => locationLog.id),
  userId: integer().notNull().references(() => user.id),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

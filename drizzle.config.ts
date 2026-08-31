import { defineConfig } from "drizzle-kit";

import { env } from "./server/lib/env";

export default defineConfig({
  out: "./server/database/migrations",
  schema: "./server/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.NUXT_DB_URL,
  },
  casing: "snake_case",
});

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "../lib/env";
import { relations } from "./auth-schema";

const pool = new Pool({
  connectionString: env.NUXT_DB_URL,
});

const db = drizzle({
  client: pool,
  relations,
});

export default db;

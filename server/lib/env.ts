import { z } from "zod";

import tryParseEnv from "./tryParseEnv";

const envSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_DB_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  AUTH_GITHUB_CLIENT_ID: z.string(),
  AUTH_GITHUB_CLIENT_SECRET: z.string(),
});

export type envSchema = z.infer<typeof envSchema>;

tryParseEnv(envSchema);

// eslint-disable-next-line node/no-process-env
export const env = envSchema.parse(process.env);

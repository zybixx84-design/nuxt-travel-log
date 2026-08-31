import { z } from "zod";

import tryParseEnv from "./tryParseEnv";

const envSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_DB_URL: z.string(),

});

export type envSchema = z.infer<typeof envSchema>;

tryParseEnv(envSchema);

// eslint-disable-next-line node/no-process-env
export const env = envSchema.parse(process.env);

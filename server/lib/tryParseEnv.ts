/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod";

import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  envSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    return envSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Invalid or missing environment variables:\n";

      error.issues.forEach((issue) => {
        message += `${issue.path.join(".")}: ${issue.message}\n`;
      });

      const e = new Error(message);
      e.stack = "";
      throw e;
    }

    throw error;
  }
}

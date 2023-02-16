import { z } from "zod";

/** responseSchema is a generic wrapper for all API responses.
 * **All** responses from the API return an object with either a
 * 'data' attribute or an 'error' attribute.
 * */
export const responseSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.object({
        data: schema,
    });

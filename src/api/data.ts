import { z } from "zod";
import { imageSchema } from "./image";
import { weatherSchema } from "./weather";
import { responseSchema } from './response';

const listSchema = z.object({
    id: z.number(),
    components: z.array(z.number()),
});

const componentSchema = z.discriminatedUnion("type", [imageSchema, weatherSchema]);

export type ComponentSchema = z.infer<typeof componentSchema>;

export const pageSchema = z.object({
    lists: z.array(listSchema),
    components: z.array(componentSchema),
});

export type Page = z.infer<typeof pageSchema>;

export const pageResponseSchema = responseSchema(pageSchema);

export type PageResponse = z.infer<typeof pageResponseSchema>;

import { z } from "zod";

const dataSchema = <T extends z.ZodTypeAny>(schema: T) => z.object({
    data: schema,
});

const listSchema = z.object({
    id: z.number(),
    components: z.array(z.number()),
});

const imageSchema = z.object({
    id: z.number(),
    type: z.literal("image"),
    options: z.object({
        src: z.string(),
        alt: z.string(),
    }),
});

export type Image = z.infer<typeof imageSchema>;

const weatherSchema = z.object({
    id: z.number(),
    type: z.literal("weather"),
    options: z.object({
        lon: z.string(),
        lat: z.string(),
    }),
});

export type Weather = z.infer<typeof imageSchema>;

const componentSchema = z.discriminatedUnion("type", [imageSchema, weatherSchema]);

export const pageSchema = z.object({
    lists: z.array(listSchema),
    components: z.array(componentSchema),
});

export type Page = z.infer<typeof pageSchema>;

const pageResponseSchema = dataSchema(pageSchema);

export type PageResponse = z.infer<typeof pageResponseSchema>;

import { z } from "zod";

export const imageSchema = z.object({
    id: z.number(),
    type: z.literal("image"),
    options: z.object({
        src: z.string(),
        alt: z.string(),
    }),
});

export type Image = z.infer<typeof imageSchema>;



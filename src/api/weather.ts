import { z } from 'zod';

export const weatherSchema = z.object({
    id: z.number(),
    type: z.literal("weather"),
    options: z.object({
        lon: z.string(),
        lat: z.string(),
    }),
});

export type Weather = z.infer<typeof weatherSchema>;

const upcomingWeatherSchema = z.object({
    day: z.string(), // TODO: narrow this type
    condition: z.string(), // TODO: narrow this type
    conditionName: z.string(),
})

export const weatherDetailsSchema = z.object({
    lon: z.string(),
    lat: z.string(),
    condition: z.string(), // TODO: narrow this type
    conditionName: z.string(),
    temperature: z.number(),
    unit: z.string(), // TODO: narrow this type
    location: z.string(),
    upcomming: z.array(upcomingWeatherSchema),
});

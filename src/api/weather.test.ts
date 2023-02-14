import { WEATHER_LOCATIONS } from "../../server/values";
import { z } from "zod";
import { weatherDetailsSchema } from "./weather";

describe("weather API", () => {
    it("should parse weather response", () => {
        z.array(weatherDetailsSchema).parse(WEATHER_LOCATIONS);
    });
});

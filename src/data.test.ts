import page1Data from "../server/pages/pageOne";

import { pageSchema } from "./data";

describe("data", () => {
    it("should parse", () => {
        pageSchema.parse(page1Data);
    });
});

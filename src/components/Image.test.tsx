import React from "react";
import { render, screen } from "@testing-library/react";

import { Image } from "./Image";

describe("Image Component", async () => {
    it("should render an 'img' tag with src and alt", async () => {
        const testSrc = "http://example.com/my-src";
        const testAlt = "my-alt";
        render(<Image src={testSrc} alt={testAlt} />);

        const image = screen.getByRole("img");

        expect(image.src).toEqual(testSrc);
        expect(image.alt).toEqual(testAlt);
    });
});

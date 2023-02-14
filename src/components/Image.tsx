import type { Image as ImageType } from "../data";

export const Image = ({ src, alt }: ImageType["options"]) => {
    return <img src={src} alt={alt} />;
};

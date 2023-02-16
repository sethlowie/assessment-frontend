import type { Image as ImageType } from "../api";
import { Card } from "./Card";
import styles from './Image.module.css';

export const Image = ({ src, alt }: ImageType["options"]) => {
    return (
        <Card fullWidth>
        <div className={styles.Container}>
            <img src={src} alt={alt} className={styles.Img} />
        </div>
        </Card>
    );
};

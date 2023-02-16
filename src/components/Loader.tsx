import styles from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.LdsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

import React from "react";
import styles from "./Card.module.css";

export const Card = ({
    children,
    fullWidth = false,
}: {
    children: React.ReactNode;
    fullWidth?: boolean;
}) => {
    return (
        <div className={styles.Card} style={fullWidth ? {} : { padding: "1.5rem" }}>
            {children}
        </div>
    );
};

import React from "react";

import styles from "./InfoBox.module.css"

interface InfoBoxProps {
    title: string;
    value: number | string;
    icon?: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({title, value, icon}) => {
    return (
        <div className={styles.infoBox}>
            <h3>{title}</h3>
            <div className={styles.infoContainer}>
                {icon}
                <h2>{value}</h2>
            </div>
        </div>
    );
};

export default InfoBox;
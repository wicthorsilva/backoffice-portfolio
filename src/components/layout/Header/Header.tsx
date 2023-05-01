import React from "react";

import styles from "./Header.module.css";

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Dashboard Wicthor Dev</h1>
            </div>

            <div className={styles.logo}>
                <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/50/ffffff/external-user-user-interface-kmg-design-detailed-outline-kmg-design-1.png" alt="user" />
            </div>
        </header>
    );
};

export default Header;
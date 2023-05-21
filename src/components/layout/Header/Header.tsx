import React from "react";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>
                    <NavLink to="/" className={styles.active}>
                       Dashboard Wicthor Dev
                    </NavLink>
                </h1>
            </div>

            <div className={styles.logo}>
                
            </div>
        </header>
    );
};

export default Header;
import React from "react";

import styles from "./Layout.module.css";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.main}>
                <Sidebar/>
                <div className={styles.boxContent}>
                  <div className={styles.content}>{children}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
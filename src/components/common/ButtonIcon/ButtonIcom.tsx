import React, { Children } from "react";

import styles from "./ButtonIcon.module.css";


interface ButtonProps {
    type?: "button" | "submit";
    onClick?: () => void;
    red?: boolean;
    children: React.ReactNode;
}

const ButtonIcon: React.FC<ButtonProps> = ({type = "button", onClick, red, children}) => {
    return <button type={type} onClick={onClick} className={`${styles.button} ${red && styles.redButton}`}>
             {children}
            </button>
}

export default ButtonIcon;
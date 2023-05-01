import React from "react";
import styles from "./Select.module.css";

interface Option {
    value: string;
    label:string;
}

interface SelectProps {
    label: string;
    name: string;
    options: Option[];
    errors?: string;
    touched?: boolean;
}

const Select: React.FC<SelectProps> = ({label, name, options, errors, touched}) => {
    const errorStyle = errors && touched ? styles.error : '';

    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <select name={name} id={name} className={`${styles.input} ${errorStyle}`}>
                <option value="">Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && touched && <div className={styles.errorMsg}>{errors}</div>}
        </div>
    );
};

export default Select;
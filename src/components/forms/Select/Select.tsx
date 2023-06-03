import React from "react";
import styles from "./Select.module.css";

import Input, {InputProps} from "../Input/Input";

interface Option {
    value: string;
    label:string;
}

interface SelectProps extends InputProps {
    options: Option[];
}

const Select: React.FC<SelectProps> = ({label, name, options, errors, touched, as="select"}) => {
    
    return (
        <div className={styles.formGroup}>


            <Input
                label={label}
                name={name}
                as={as}
                errors={errors}
                touched={touched}
            >
                <option value="">Selecione uma opção</option>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </Input>
        </div>
    );
};

export default Select;
import React from "react";

import { Formik, FormikHelpers, FormikProps, FormikValues, Form as FormikForm } from "formik";
import * as Yup from "yup";

import styles from "./Form.module.css";

interface FormProps<T> {
    initialValues: T;
    validationSchema:Yup.ObjectSchema<Omit<Partial<T>, "id">>;
    enableReinitialize?: boolean;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
    children: (formikProps: FormikProps<T>) => React.ReactNode;
}

const Form = <T extends FormikValues>({initialValues, validationSchema, onSubmit, children}: FormProps<T>) => {
    return (
        <div className={styles.formWrapper}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={onSubmit}    
            >
                {(formikProps) =>(
                    <FormikForm className={styles.form}>
                            {children(formikProps)}
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
};

export default Form;
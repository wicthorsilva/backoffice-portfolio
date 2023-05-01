import React from "react";

import styles from "./ProjetoCadastro.module.css";

import Input from "../../../components/forms/Input";

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    link: string;
    image: string;
    title: string;
}

const validationSchema = Yup.object().shape({
    link: Yup.string().required('Campo obrigatório'),
    image: Yup.string().required('Campo obrigatório'),
    title: Yup.string().required('Campo obrigatório'),
    // resumo: Yup.string().required('Campo obrigatório'),
});

    const initialValues: FormValues = {
        link: '',
        image: '',
        title: '',
    };


const ProjetoCadastro: React.FC = () => {

    const onSubmit = (values: FormValues, {resetForm}: {resetForm: () => void}) => {
        //logica
        console.log(values);
        resetForm();
        alert ('Formulário enviado com sucesso!');
    };

    return(
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({errors, touched}) => (
                <Form className={styles.form}>
                    <h2 className={styles.title}>Cadastro de Projetos</h2>

                    <Input
                     label="Link"
                     name="link"
                     errors={errors.link}
                     touched={touched.link}
                    />

                    <Input
                     label="Imagem"
                     name="image"
                     errors={errors.image}
                     touched={touched.image}
                    />
                    
                    <Input
                     label="Título"
                     name="title"
                     errors={errors.title}
                     touched={touched.title}
                    />

                    <button type="submit" className={styles.button}>Salvar</button>

                </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProjetoCadastro;
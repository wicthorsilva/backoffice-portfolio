import React from "react";

import * as Yup from "yup";

import {Formik, Form, Field, ErrorMessage} from 'formik';

import styles from "./CadastrarExperiencia.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/Textarea/Textarea";
import Select from "../../../components/forms/Select";

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const CadastrarExperiencia: React.FC = () => {

    const initialValues: FormValues = {
        titulo: "",
        descricao: "",
        tipo: "",
        anoInicio: "",
        anoFim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.number().required('Campo obrigatório').typeError("Digite nùmeros"),
        anoFim: Yup.number().required('Campo obrigatório') .typeError("Digite nùmeros"),
    });

    const onSubmit = (values: FormValues, {resetForm}: {resetForm: () => void}) => {
        console.log(values);
        resetForm();
        alert ('Formulário enviado com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastro de Experiência</h2>
                        <Input
                          label="Título"
                          name="titulo"
                          errors= {errors.titulo}
                          touched={touched.titulo}
                        />

                        <Input
                           label="Ano de Inicio"
                           name="anoInicio"
                           errors= {errors.anoInicio}
                          touched={touched.anoInicio}
                        />

                        <Input
                           label="Ano Final"
                           name="anoFim"
                           errors= {errors.anoFim}
                          touched={touched.anoFim}
                        />

                        <Select
                          label="Tipo de experiência"
                          name="tipo"
                          options={[
                            { value: "profissional", label: "Profissional"},
                            { value: "academico", label: "Acadêmico"},
                          ]}
                          errors={errors.tipo}
                          touched={touched.tipo}
                        />

                        <Textarea
                           label="Descrição"
                           name="descricao"
                           errors= {errors.descricao}
                          touched={touched.descricao}
                        />

                        <button type="submit" className={styles.button}>Cadastrar</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default CadastrarExperiencia;
import React from "react";

import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';

import styles from "./CadastrarExperiencia.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/Textarea/Textarea";
import Select from "../../../components/forms/Select";

import { Experiencia, createOrUpdateExperiencia } from "../../../services/experienciaService";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";

const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experiencia = location.state as Experiencia;

    const initialValues: Experiencia = {
        id: 0,
        titulo: "",
        descricao: "",
        tipo: "",
        ano_inicio: "",
        ano_fim: "",
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string(),
        tipo: Yup.string().required('Campo obrigatório'),
        ano_inicio: Yup.number().required('Campo obrigatório').typeError("Digite nùmeros"),
        ano_fim: Yup.number().required('Campo obrigatório') .typeError("Digite nùmeros"),
    });

    const onSubmit = async (values: Experiencia, {resetForm}: {resetForm: () => void}) => {
        try {
            await createOrUpdateExperiencia(values);  //logica
            console.log(values);
            resetForm();
            navigate ("/curriculo/experiencia/lista")
            alert ('Formulário enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário')
        }
    };

    return (
        <div className={styles.formWrapper}>
                        {
                        !experiencia ? 
                           <Title>Cadastrar experiência</Title>
                           :
                           <Title>Atualizar experiência</Title>
                    }
            <Formik initialValues={experiencia || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <Input
                          label="Título"
                          name="titulo"
                          errors= {errors.titulo}
                          touched={touched.titulo}
                        />

                        <Input
                           label="Ano de Inicio"
                           name="ano_inicio"
                           errors= {errors.ano_inicio}
                          touched={touched.ano_inicio}
                        />

                        <Input
                           label="Ano Final"
                           name="ano_fim"
                           errors= {errors.ano_fim}
                          touched={touched.ano_fim}
                        />

                        <Select
                          label="Tipo de experiência"
                          name="tipo"
                          options={[
                            { value: "profissional", label: "Profissional"},
                            { value: "academica", label: "Acadêmica"},
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

                        <Button type="submit">Salvar</Button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default CadastrarExperiencia;
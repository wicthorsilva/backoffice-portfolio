import React from "react";

import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

import Form from "../../../components/forms/Form";
import styles from "./CadastrarExperiencia.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/Textarea/Textarea";
import Select from "../../../components/forms/Select";

import { Experiencia, createOrUpdateExperiencia } from "../../../services/experienciaService";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";

const CadastrarExperiencia: React.FC = () => {

    const navigate = useNavigate();
    
    const experiencia = useLocation().state as Experiencia;

    const initialValues: Experiencia = {
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
        ano_fim: Yup.string().required('Campo obrigatório') .typeError(""),
    });

    const onSubmit = async (values: Experiencia, {resetForm}: {resetForm: () => void}) => {
        try {
            await createOrUpdateExperiencia(values);  //logica
            resetForm();
            navigate ("/curriculo/experiencia/lista")
            alert ('Formulário enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário')
        }
    };

    return (
        
                       
            <Form
            
            initialValues={experiencia || initialValues} validationSchema={validationSchema} 
            onSubmit={onSubmit}
            >

                {({ errors, touched }) => (

                    <>
                    {
                        !experiencia ? 
                           <Title>Cadastrar experiência</Title>
                           :
                           <Title>Atualizar experiência</Title>
                    }

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
                            { value: "academico", label: "Acadêmica"},
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
                   
                        </>
                )}

                 </Form>
            
    )
}

export default CadastrarExperiencia;
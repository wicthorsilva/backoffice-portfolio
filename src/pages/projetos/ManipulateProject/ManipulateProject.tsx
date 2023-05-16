import React from "react";

import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";


import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";


import { Project, createOrUpdateProject } from "../../../services/projectsService";


const ManipulateProject = () => {

    const navigate = useNavigate();
    const projects = useLocation().state as Project;

    const initialValues: Project = {
        link: '',
        image: '',
        title: '',
    };

    const validationSchema = Yup.object().shape({
        link: Yup.string().required('Campo obrigatório'),
        image: Yup.string().required('Campo obrigatório'),
        title: Yup.string().required('Campo obrigatório'),
    });

    const onSubmit = async (values: Project, {resetForm}: {resetForm: () => void}) => {
        try {
            await createOrUpdateProject(values);
            resetForm();
            navigate("/projetos/lista");
            alert ('Formulário enviado com sucesso!');
        } catch (error) {
            alert("Erro ao enviar formulário");
        }
    };

    return(
        <Form
          initialValues={projects || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
         >
                {({errors, touched}) => (
                
                    <>
                    {
                        !projects ? 
                           <Title>Cadastrar Projeto</Title>
                           :
                           <Title>Atualizar Projeto</Title>
                    }

                    <Input
                     label="Título"
                     name="title"
                     errors={errors.title}
                     touched={touched.title}
                    />

                    <Input
                     label="Imagem"
                     name="image"
                     errors={errors.image}
                     touched={touched.image}
                    />
                    
                    <Input
                     label="Link"
                     name="link"
                     errors={errors.link}
                     touched={touched.link}
                    />

                    <Button type="submit">Salvar</Button>
                    </>
                )}
        </Form>
    );
};

export default ManipulateProject;
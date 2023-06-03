import React, { useEffect, useState } from "react";

import * as Yup from 'yup';
import {AxiosError} from "axios";

import styles from "./CadastrarInformacoes.module.css";

import Form from "../../../components/forms/Form/Form";
import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import CardInformacoes from "./CardInformacoes";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";
import {
    Informacoes,
    getInformacoes,
    deleteInformacoes,
    createOrUpdateInformacoes
} from "../../../services/informacoesService"


const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>();

    const initialValues: Informacoes = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: '',
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),
    });

    const fetchInformacao = async () => {
        try {
            const informacao = await getInformacoes();
            setInformacoes(informacao);
        } catch (error) {
            if (error instanceof AxiosError){
                if (error.response?.status !== 404){
                    console.error('Erro ao buscar informações:', error);
                }
            } else {
                console.error("Ocorreu um erro desconhecido ao buscar informações: ", error);
            }
        }
    };

    useEffect (() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes) => {
        try {
            await createOrUpdateInformacoes(values);
            setInformacoes(values);
            alert("Formulario enviado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            alert("Ocorreu um erro ao enviar o formulario. Tente novamente.");
        }
    }

    const handleDelete = async () => {
        try {
            await deleteInformacoes();
            setInformacoes(undefined);
            alert('Informações deletadas com sucesso');
        } catch (error) {
            console.error('Erro ao deletar informações:', error);
            alert ('Ocorreu um erro ao deletar as informações. Tente novamente')
        }
    };

    return (
        <main>

            <Title>Cadastro de informações</Title>

            <div className={styles.formWrapper}>


                <Form 
                initialValues={informacoes || initialValues} 
                enableReinitialize={true} 
                validationSchema={validationSchema} onSubmit={onSubmit}>

                    {({errors, touched}) => (
                    
                    <>
                        <h2 className={styles.titleForm}>Informações</h2>


                        <Input
                        label="Foto"
                        name="foto"
                        errors={errors.foto}
                        touched={touched.foto}
                        />

                        <Input
                        label="Nome"
                        name="nome"
                        errors={errors.nome}
                        touched={touched.nome}
                        />
                        
                        <Input
                        label="Cargo"
                        name="cargo"
                        errors={errors.cargo}
                        touched={touched.cargo}
                        />

                        <Textarea
                        label="Resumo"
                        name="resumo"
                        errors={errors.resumo}
                        touched={touched.resumo}
                        />

                        <Button type="submit">Salvar</Button>

                        </>
                    )}
                </Form>

             {informacoes &&
                <div className={styles.cardContainer}>
                    <CardInformacoes informacoes={informacoes}/>
                    <Button onClick={handleDelete} red={true}>Deletar</Button>
                </div>
                }
            </div>
        </main>
    );
};

export default CadastrarInformacoes;
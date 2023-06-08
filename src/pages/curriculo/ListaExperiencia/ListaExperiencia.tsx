import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./ListaExperiencia.module.css";
import {Experiencia, deleteExperiencia, getExperiencias, updateExperiencia } from "../../../services/experienciaService";

import ButtonIcon from "../../../components/common/ButtonIcon";
import Title from "../../../components/common/Title";
import { Column, Table } from "../../../components/common/Table";



const ListaExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencias, setExperiencia] = React.useState<Experiencia[]>([]);

    const fetchExperiencias = async () => {
        try {
            const experiencia = await getExperiencias();
            setExperiencia(experiencia);
        } catch (error) {
            console.log('Erro ao buscar experiencia', error);
        }
    };

    useEffect(() => {
        fetchExperiencias();
    }, []);

    const handleEdit = (experiencia: Experiencia) => {
          navigate ("/curriculo/experiencia/atualizar", {state: experiencia});
        // lógica para edição "index"
    };

    const handleDelete = async(experiencia: Experiencia) => {
        try {
            await deleteExperiencia(experiencia.id);
            fetchExperiencias();
            alert ("Experiência excluida com sucesso")
        } catch (error) {
            console.log('Error ao excluir experiência', error);
            alert("Ocorreu um erro ao excluir a experiência");
        }
        //logica;
    };

    const columns: Column<Experiencia>[] = [
        {header: "Título", accessor: "titulo"},
        {header: "Descrição", accessor: "descricao"},
        {header: "Tipo", accessor: "tipo"},
        {header: "Ano Início", accessor: "ano_inicio"},
        {header: "Ano Fim", accessor: "ano_fim"},

    ];

    return (
        <main>
            <Title>Lista de experiência</Title>
            <Table
              columns={columns}
              data={experiencias}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
        </main>
    );
};

export default ListaExperiencia;
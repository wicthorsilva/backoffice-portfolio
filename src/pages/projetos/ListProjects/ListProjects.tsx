import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";

import {
    Table, Column
} from "../../../components/common/Table";

import {
    Project,
    deleteProject,
    getProjects
} from "../../../services/projectsService";
import Title from "../../../components/common/Title";



const ListProjects: React.FC = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchProjects = async () => {
        try {
            const projects = await getProjects();
            setProjects(projects);
        } catch (error) {
            console.log(error);
            alert ("Erro ao buscar projetos");
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleEdit = (itemProjects: Project) => {
        navigate("/project/atualizar", {state: itemProjects });
    };

    const handleDelete = async (projects: Project) => {
        try {
            await deleteProject(Number(projects.id));
            fetchProjects();
            alert("Projeto excluído com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Erro ao excluir projeto");
        }
    };

    const columns: Column<Project>[] = [
        { header: "Título", accessor: "title"},
        { header: "Imagem", accessor: "image"},
        { header: "Link", accessor: "link"},
    ];

    return (
        <main>
            <Title>Lista de Projetos</Title>
            <Table 
            columns={columns}
            data={projects}
            handleEdit={handleEdit}       
            handleDelete={handleDelete}       
            />
        </main>
    );
};

export default ListProjects;
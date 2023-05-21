
import React,{useEffect, useState} from "react";

import styles from "./Home.module.css";

import {FaGraduationCap, FaBriefcase, FaFolder} from "react-icons/fa";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import { Experiencia, getExperienciasByTipo } from "../../services/experienciaService";
import { Project, getProjects } from "../../services/projectsService";


const Home= () => {

    const [experienciasAcademicas, setExperienciasAcademicas] = useState<Experiencia[]>([]);
    const [experienciasProfissionais, setExperienciasProfissionais] = useState<Experiencia[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchExperienciasAcademicas = async () => {
        try {
            const response = await getExperienciasByTipo("academico");
            setExperienciasAcademicas(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchExperienciasProfissionais = async () => {
        try {
            const response = await getExperienciasByTipo("profissional");
            setExperienciasProfissionais(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await getProjects();
            setProjects(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExperienciasAcademicas();
        fetchExperienciasProfissionais();
        fetchProjects();
    }, []);

    return (
        <main className={styles.container}>
            <Title>Bem vindo ao meu sistema de backoffice  \ ^_^ /</Title>
            <p>Dashboard do site</p>
            <div className={styles.infoBoxContainer}>
                <InfoBox
                    title="Experiências Acadêmicas"
                    value={experienciasAcademicas.length}
                    
                />
                <InfoBox
                    title="Experiências Profissionais"
                    value={experienciasProfissionais.length}
                    
                />
                <InfoBox
                    title="Projetos"
                    value={projects.length}
                    
                />
            </div>
        </main>
    );
};

export default Home;
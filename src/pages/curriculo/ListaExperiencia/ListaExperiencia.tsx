import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./ListaExperiencia.module.css";
import {Experiencia, deleteExperiencia, getExperiencias, updateExperiencia } from "../../../services/experienciaService";



const ListaExperiencia: React.FC = () => {

    const navigate = useNavigate();

    const [experiencia, setExperiencia] = React.useState<Experiencia[]>([]);

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

    const handleEdit = async (experiencia: Experiencia) => {
        navigate ("/curriculo/experiencia/cadastro", {state: experiencia})
        // lógica para edição "index"
    };

    const handleDelete = async(id: number) => {
        try {
            await deleteExperiencia(id);
            fetchExperiencias();
            alert ("Experiência excluida com sucesso")
        } catch (error) {
            console.log('Error ao excluir experiência', error);
            alert("Ocorreu um erro ao excluir a experiência");
        }
        //logica;
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Ano Início</th>
                    <th>Ano Fim</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiencia.map((experiencia, index)=> (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={()=> handleEdit(experiencia)}>Editar</button>
                            <button onClick={()=> handleDelete(experiencia.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaExperiencia;
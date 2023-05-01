import React from "react";

import styles from "./ListaExperiencia.module.css";

interface Experiencia {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

const ListaExperiencia: React.FC = () => {

    const [experiencia, setExperiencia] = React.useState<Experiencia[]> ([
        {
            titulo:"Treinamento de CSS",
            descricao: "Curso intensivo promovido pelo Comeia Academy",
            tipo: "Estudo",
            anoInicio: "2023",
            anoFim: "2023",
        }
    ]);

    const handleEdit = (experiencia: Experiencia) => {
        // lógica para edição "index"
    };

    const handleDelete = (index: number) => {
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
                            <button onClick={()=> handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaExperiencia;
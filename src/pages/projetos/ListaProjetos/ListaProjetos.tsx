import React, {useState} from "react";

import styles from "./ListaProjetos.module.css";

interface Projetos {
    link: string;
    image: string;
    title: string;
};

const ListaProjetos: React.FC = () => {

    const [projetos, setProjeto] = useState<Projetos[]> ([
        {
            link: 'https://wicthorsilva.github.io/project-barberlup/',
            image: 'https://picsum.photos/id/26/300/201',
            title: 'Projeto 1'
        },
        {
            link: 'https://wicthorsilva.github.io/landingpage/',
            image: 'https://picsum.photos/id/9/300/202',
            title: 'Projeto 2'
        }
    ]);

    const handleEdit = (index: number) => {
        // lógica para edição "index"
    };

    const handleDelete = (index: number) => {
        //logica;
    };

    return (
        <table className="styles.table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {projetos.map((itemProjeto, index) => (
                    <tr key={index}>
                        <td>{itemProjeto.title}</td>
                        <td><img src={itemProjeto.image} alt={itemProjeto.title} className={styles.image} /></td>
                        <td><a href={itemProjeto.link} target="_blank" rel="noreferrer">{itemProjeto.link}</a></td>
                        <td>
                            <button onClick={()=> handleEdit(index)}>Editar</button>
                            <button onClick={()=> handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaProjetos;
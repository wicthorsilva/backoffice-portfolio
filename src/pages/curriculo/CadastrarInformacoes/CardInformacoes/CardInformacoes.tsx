import React from "react";
import styles from "./CardInformacoes.module.css";

import { Informacoes } from "../../../../services/informacoesService";

interface CardInformacoesProps {
    informacoes: Informacoes;
}

const CardInformacoes: React.FC<CardInformacoesProps> = ({informacoes}) => {
    const {foto, nome, cargo, resumo} = informacoes;

    return (
        <div className={styles.card}>
            <img src={foto} alt={`${nome}'s foto`} className={styles.foto} />
            <div className={styles.content}>
                <h3 className={styles.nome}>{nome}</h3>
                <p className={styles.cargo}>{cargo}</p>
                <p className={styles.resumo}>{resumo}</p>
            </div>
        </div>
    );
};

export default CardInformacoes;
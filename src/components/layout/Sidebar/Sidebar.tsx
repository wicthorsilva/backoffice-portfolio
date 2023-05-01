import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" className={styles.active}>
                            Início
                        </NavLink>
                    </li>
                </ul>

                <h3>Sobre mim</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" className={styles.active}>
                            Cadastrar Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" className={styles.active}>
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/lista" className={styles.active}>
                            Lista de Experiência
                        </NavLink>
                    </li>
                </ul>

                <h3>Projetos</h3>
                <ul>
                    <li>
                        <NavLink to="/projetos/cadastro" className={styles.active}>
                            Cadastrar Projeto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projetos/lista" className={styles.active}>
                            Lista de Projeto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
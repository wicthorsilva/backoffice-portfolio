import React from "react";

import CadastrarInformacoes from "../pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencia from "../pages/curriculo/CadastrarExperiencia";
import ListaProjetos from "../pages/projetos/ListaProjetos";
import ListaExperiencia from "../pages/curriculo/ListaExperiencia";
import ProjetoCadastro from "../pages/projetos/ProjetoCadastro";
import Home from "../pages/home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "../components/layout";
import { useAuth } from "../contexts/AuthContext";


const AppRoutes: React.FC = () => {
    const {authenticated, isLoading} = useAuth();

    if(isLoading) {
        return <p>Carregando...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/login"/>;
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes/>}/>
                <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia/>}/>
                <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia/>}/>
                <Route path="/projetos/cadastro" element={<ProjetoCadastro/>}/>
                <Route path="/projetos/lista" element={<ListaProjetos/>}/>
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
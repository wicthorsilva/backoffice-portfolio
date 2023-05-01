import React from "react";

import {Layout} from "./components/layout";

import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastrarInformacoes from "./pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencia from "./pages/curriculo/CadastrarExperiencia";
import ListaProjetos from "./pages/projetos/ListaProjetos";
import ListaExperiencia from "./pages/curriculo/ListaExperiencia";
import ProjetoCadastro from "./pages/projetos/ProjetoCadastro/ProjetoCadastro";

const App: React.FC = () => {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/navBar';

import Home from "../views/home";
import Cadastro from "../views/cadastro";
import FalhaCadastro from "../views/falhaCadastro";

function Router() {
    return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/cadastro/falha-cadastro" element={<FalhaCadastro />}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;
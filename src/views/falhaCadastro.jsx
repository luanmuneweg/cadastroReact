import React from "react";
import { Link } from 'react-router-dom'
import './styles/falhaCadastro.scss';

function Falha() {
    
    return (
        <div>
            <div className="alert">
                <h1>Tentando cadastrar mais horas do que tem no dia? Eu não posso né..</h1>
                <h2>Cadastre um dia de cada vez!</h2>
            </div>
            <div>
                <Link to="/cadastro"><button className="Link">Voltar</button></Link>
            </div>
        </div>
    )
}

export default Falha;
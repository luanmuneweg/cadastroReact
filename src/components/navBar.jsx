import React from "react";
import { Link } from 'react-router-dom'
import './styles/navBar.scss'
 
function NavBar() {

    return (
    <div className="navBar">
        <Link className={"link"} to="/">Home</Link>
        <Link className={"link"} to="/cadastro">Cadastro</Link>
    </div>
    )
}

export default NavBar;
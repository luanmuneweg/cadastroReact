import React from "react";
import "./styles/cadastro.scss";

function Cadastros () {

    return (
        <div className="cadastro">
            <h1>Registro de atividades</h1>
            
            <form className="form" method="POST" action="http://localhost:3001/form_enviado">

                <div className="horarios">
                    <label htmlFor="atividade">Atividade:</label>
                    <input type="text" id="atividade" name="atividade" placeholder="Atividade" required/>
                    
                    <label htmlFor="dateInicio">Horario e data Inicial:</label>
                    <input type="datetime-local" id="dateInicio" name="dateInicio" required/>

                    <label htmlFor="dateFim">Horario e data Final:</label>
                    <input type="datetime-local" id="dateFim" name="dateFim" required/>
                    
                </div>

                <div className="button_div">
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default Cadastros;
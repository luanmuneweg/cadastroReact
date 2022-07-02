import React, { useEffect, useState } from "react";
import './styles/api.scss';

function Api (bancoData) {
    const [dados, setdados] = useState([]);

    useEffect(() => {
        async function loadDb() {
            const dados = await fetch('/api');
            const response = await dados.json();

            setdados(response);
        }  

        loadDb();
    }, []);

    function comparaDatas(dataI) {
        let dataInicio = new Date (dataI);
        const diaC = dataInicio.getDate();
        const mesC = dataInicio.getMonth()+1;
        const anoC = dataInicio.getFullYear();

        let d = ''
        let m = ''

        diaC <= 9 ? d = "0" : d = '';
        mesC <= 9 ? m = "0" : m = '';

        let dateC = `${d}${diaC}/${m}${mesC}/${anoC}`;
        return dateC;
    }

    function getFullTime(UTC) {
        var date = new Date(UTC)
        var time = date.getTime()
        return time
    }

    function converteHorario(AhoraCerta) {
        const horaFinal = ((AhoraCerta) / 1000 / 60 / 60).toFixed(0)
        const minutosFinal = (((AhoraCerta) / 60000) % 60).toFixed(0)
        var z = ''; horaFinal.length > 1 ? z = '': z = '0';
        var m = ''; minutosFinal.length > 1 ? m = '' : m = '0';

        const hora = `${z}${horaFinal}:${m}${minutosFinal}`
        return hora;
    }

    var soma = 0;
    return (
        <div className="card">
            <div>
                {dados.map((dado, index) => {
                    const comparaData = comparaDatas(dado.dateI);
                    const dateI = getFullTime(dado.dateI);
                    const dateF = getFullTime(dado.dateF);
                    
                    const horarios = (dateF-dateI);
                    
                    if(comparaData === bancoData.bancoData){
                        soma = soma + horarios;
                        return (
                            <div key={index} className="card_horas">
                                <div>
                                    {`${converteHorario(horarios)} - ${dado.atividade}`}
                                </div>
                            </div>
                        )
                    } else return <></>
                })}
            </div>
            <div className="totalHoras">
                <strong>Total de horas gastos:</strong> {`${converteHorario(soma)}h`}
            </div>
        </div>
    );
};

export default Api;
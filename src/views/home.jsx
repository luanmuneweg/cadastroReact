import React, { useEffect, useState } from "react";
import Api from '../components/api';
import './styles/home.scss';

function Home() {

    const [datas, setdatas] = useState([]);

    useEffect(() => {
        async function loadDb() {
            const dados = await fetch('/dates');
            const response = await dados.json();

            setdatas(response);
        }  

        loadDb();
    }, []);

    function dataString(dateCru){
        const mes = dateCru;
        return mes.toString()
    }

    return (
        <div className="grid">
            {datas.map((data, index) => {
                return (
                    <div key={index} className="cardH">
                        <div className="cardH_data">{dataString(data.dateC)}</div>
                        <Api bancoData={data.dateC}></Api>
                    </div>
                )
            })}
        </div>
    )

}

export default Home;
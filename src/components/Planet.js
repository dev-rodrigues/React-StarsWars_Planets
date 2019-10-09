import React, { useState, useEffect } from 'react';
import api from '../service/api';
import { LineScale } from 'react-pure-loaders';
import '../styles/Planet.css'

import Header from './Header';
import Content from './Content';
import Feature from './Feature';
import Button from './Button';


export default function Planet(){

    const [ loading, setLoading ] = useState(false);  
    const [ planet, setPlanet ] = useState({});
    const { name, population, climate, terrain, films } = planet;

    let numeroDoPlaneta = 0;
    let ultimoNumero = 0;

    let geraNumero = () => Math.floor(Math.random() * 61);
    
    function verificaNumero(){
        let novoNumero = geraNumero();
    
        if(novoNumero !== ultimoNumero && novoNumero !== 0){
            numeroDoPlaneta = novoNumero;
        } else {
            numeroDoPlaneta = geraNumero();
        }

        ultimoNumero = numeroDoPlaneta;
    }

    function handleClick(){

        setLoading(true);
        
        verificaNumero();

        async function getPlanet(){
            let response = await api.get(`/planets/${numeroDoPlaneta}`);
            setPlanet(response.data);
        }
        
        getPlanet();
    }

    useEffect(() => {
        setLoading(false);
    }, [planet]);

    return (
        <div className="container">
            <h1 className="titulo">planets</h1>
            <div className="info">
                {loading && (
                    <div className="loading">
                        <LineScale
                            color={'black'}
                            loading={loading}
                        />
                    </div>
                )}
                {!loading &&(
                    <>
                        < Header dado={"Planet name"} valor={name} />
                        < Content dado={"Population"} valor={population} />
                        < Content dado={"Climate"} valor={climate} />
                        < Content dado={"Terrain"} valor={terrain} />
                        < Feature dado={"Feature in"} valor={films} />
                    </>
                )}
            </div>
            < Button onClick={handleClick} />
        </div>
    );
}
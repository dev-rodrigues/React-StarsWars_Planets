import React, { useState, useEffect } from 'react';
import { LineScale } from 'react-pure-loaders';
import api from '../service/api';
import '../styles/Planet.css'

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Button from './Button';


export default function Planet(){

    const [ filmes, setFilmes ] = useState([]);
    const [ loading, setLoading ] = useState(false);  
    const [ planet, setPlanet ] = useState({});
    const { name, population, climate, terrain } = planet;

    let numeroDoPlaneta = 0;
    let ultimoNumero = 0;

    let geraNumero = () => Math.floor(Math.random() * 61 + 1);
    
    function verificaNumero(){
        let novoNumero = geraNumero();
    
        if(novoNumero !== ultimoNumero){
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
            
            if(response.data.films){
                let quantidadeFilmes = response.data.films.map(item => item);
                setFilmes(quantidadeFilmes);
            }
        }
        
        getPlanet();
    }

    useEffect(() => {
        setLoading(false);
    }, [planet]);

    return (
        <div className="container">
            <h3 className="sub-titulo">Star Wars</h3>
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
                        < Footer dado={"Feature in"} valor={filmes} />
                    </>
                )}
            </div>
            < Button onClick={handleClick} valor={planet} hidden={loading} />
        </div>
    );
}
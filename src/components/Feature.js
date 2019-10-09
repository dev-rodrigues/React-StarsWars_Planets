import React from "react";
import '../styles/Planet.css';

export default function Footer(props) {
  let vetor = [];
  if(props.valor){
      props.valor.map(item => vetor.push(item))
  }

  return (
    <>
      <p className="feature">{props.dado} {vetor.length} {vetor.length === 1 ? 'film' : 'films'}</p>
    </>
  );
}

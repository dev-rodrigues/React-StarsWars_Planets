import React from "react";
import '../styles/Planet.css';

export default function Footer(props) {
  let vetor = [];
  if(props.valor){
      props.valor.map(item => vetor.push(item))
  }

  return (
    <>
      <p className="footer">{props.dado}: {vetor.length} films</p>
    </>
  );
}

import React from "react";
import '../styles/Planet.css';

export default function Feature(props) {
  return (
    <>
      <p className="feature">{props.dado} {props.valor.length} {props.valor.length === 1 ? 'film' : 'films'}</p>
    </>
  );
}

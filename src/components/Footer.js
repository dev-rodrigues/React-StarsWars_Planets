import React from "react";
import '../styles/Planet.css';

export default function Footer(props) {
  return (
    <>
      <p className="footer">{props.dado} {props.valor.length} {props.valor.length === 1 ? 'film' : 'films'}</p>
    </>
  );
}

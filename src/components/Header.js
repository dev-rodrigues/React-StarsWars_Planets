import React from "react";
import '../styles/Planet.css';

export default function Header(props) {
  return (
    <>
      <h1 className="header">{(props.valor) ? props.valor : props.dado}</h1>
    </>
  );
}


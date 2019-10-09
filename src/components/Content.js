import React from "react";
import '../styles/Planet.css';

export default function Content(props) {
  return (
    <>
      <p className="content"><strong>{props.dado}:</strong> {props.valor}</p>
    </>
  );
}

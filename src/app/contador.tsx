"use client";
import { useState } from "react";

export function Contador() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero((prevNumero) => prevNumero + 1);
  }

  function diminuir() {
    setNumero((prevNumero) => prevNumero - 1);
  }

  return (
    <>
      <h1 className="h1">Contador</h1>
      <div className="fundo">
        <div className="fundo2">
      
          <p className="resultado">{numero}</p>
         
          <button className="mais" onClick={aumentar}>
            Mais
          </button>
          <button className="menos" onClick={diminuir}>
            Menos
          </button>
        </div>
      </div>
    </>
  );
}

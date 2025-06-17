import React from "react";
import { useState } from "react";
export default function LeerMas({ texto, limite = 20 }) {
  const [expandido, setExpandido] = useState(false);
  const palabras = texto.split(" ");
  const esLargo = palabras.length > limite;
  const textoMostrado = expandido
    ? texto
    : palabras.slice(0, limite).join(" ") + (esLargo ? " ..." : "");

  return (
    <div className="flex flex-col justify-between min-h-[180px] w-full">
      <p className="text-justify">{textoMostrado}</p>
      {esLargo && (
        <button
          onClick={() => setExpandido(!expandido)}
          className="mt-4 text-[#38b48b] font-semibold hover:underline self-start"
        >
          {expandido ? "Leer menos" : "Leer más"}
        </button>
      )}
    </div>
  );
}


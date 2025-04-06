import { useState } from "react";
import "./ControleVisibilidade.css";

type textoProps = {
  texto: string;
};

function ToggleVisibilidade({ texto }: textoProps) {
  const [Mostrar, setMostrar] = useState(true);

  return (
    <div className="toggle-visibilidade">
      <p className="texto-exibir-ocultar">Texto exibir/ocultar</p>
      {Mostrar && <p className="texto-mostrar">{texto}</p>}
      <button className="botao-mostrar" onClick={() => setMostrar(!Mostrar)}>
        {Mostrar ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}

export default ToggleVisibilidade;

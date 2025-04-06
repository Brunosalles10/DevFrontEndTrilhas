import { useState } from "react";
import "./Contador.css";

interface ContadorProps {
  valorInicial: number;
}

const Contador = ({ valorInicial }: ContadorProps) => {
  const [contador, setContador] = useState(valorInicial);

  const onClick = () => {
    setContador(contador + 1);
  };

  const onClickMenos1 = () => {
    setContador(contador - 1);
  };

  return (
    <div className="Contador">
      <p className="contador-valor"> Contados simples: {contador}</p>
      <div className="contador-botoes">
        <button className="botao-incrementar" onClick={onClick}>
          Mais 1
        </button>
        <button className="botao-decrementar" onClick={onClickMenos1}>
          Menos 1
        </button>
      </div>
    </div>
  );
};

export default Contador;

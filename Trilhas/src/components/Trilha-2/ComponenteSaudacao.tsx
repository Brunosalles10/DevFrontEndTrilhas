import { useState } from "react";
import "./ComponenteSaudacao.css";

interface saudacaoPersonalizada {
  saudacao: string;
}

function ComponenteSaudacao({ saudacao }: saudacaoPersonalizada) {
  const [nome, setNome] = useState(saudacao);

  return (
    <div className="saudacao">
      <p className="saudacao-texto">Saudação personalizadada: {nome}</p>
      <input
        type="text"
        className="input-saudacao"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></input>
    </div>
  );
}

export default ComponenteSaudacao;

import { useState } from "react";
import "./ListaTarefas.css";

interface listaProps {
  listaInicial: string[];
}

const ListaTarefas = ({ listaInicial }: listaProps) => {
  const [lista, setLista] = useState(listaInicial);
  const [novaTarefa, setNovaTarefa] = useState("");

  const addTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setLista([...lista, novaTarefa]);
      setNovaTarefa("");
    }
  };

  return (
    <div className="lista-container">
      <p className="titulo-lista">Listas de tarefas</p>
      <ul className="lista-tarefas">
        {lista.map((tarefa, index) => (
          <li key={index} className="item-lista">
            {tarefa}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="input-tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button className="botao-adicionar-tarefa" onClick={addTarefa}>
        Adicionar Tarefa
      </button>
      <button onClick={() => setLista([])}>Limpar Lista</button>
    </div>
  );
};

export default ListaTarefas;

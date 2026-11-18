import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  function adicionar() {
    if (texto.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), texto: texto, feita: false }]);
    setTexto("");
  }
  function alternar(id) { 
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t)) // NOVO
    ); 
  } 

  function remover(id) {
    setTarefas(tarefas.filter((t) => t.id !== id)); 
  } 

  return (
    <div>
      <h1>As minhas tarefas</h1>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>
      <p>Estás a escrever: {texto}</p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}
          <span
      
              onClick={() => alternar(tarefa.id)}
              style={{ 
                textDecoration: tarefa.feita ? "line-through" : "none", 
                cursor: "pointer", 
              }} 
            >
              {tarefa.texto}
            </span>
            <button onClick={() => remover(tarefa.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

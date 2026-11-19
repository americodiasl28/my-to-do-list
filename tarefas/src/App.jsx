import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; 
import NovaTarefa from "./pages/NovaTarefa.jsx"; 
import ListaTarefas from "./pages/ListaTarefas.jsx"; 

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Beber água", feita: false },
  ]);
  function adicionar() {
    if (texto.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now(), texto: texto, feita: false }]);
    setTexto("");
  }
  function alternar(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t)),
    );
  }

  function remover(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }
  return (
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route
        path="/nova"
        element={
          <NovaTarefa texto={texto} setTexto={setTexto} adicionar={adicionar} />
        }
      />
      <Route
        path="/tarefas"
        element={
          <ListaTarefas tarefas={tarefas} alternar={alternar} remover={remover} />
        }
      />
    </Routes>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home.jsx";
import Toast from "./Toast.jsx";

function App() {
  // ---------- Estado ----------
  const [tarefas, setTarefas] = useState(() => {
    const guardado = localStorage.getItem("tarefas");
    if (guardado) return JSON.parse(guardado);
    return [];
  });

  // O toast é um objeto { id, mensagem } ou null (nenhum toast visível)
  const [toast, setToast] = useState(null);

  // ---------- Efeitos ----------
  // Guardar as tarefas no browser sempre que mudam
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // Esconder o toast 2,5 segundos depois de aparecer
  useEffect(() => {
    if (!toast) return;
    const temporizador = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(temporizador); // limpeza: cancela o temporizador anterior
  }, [toast]);

  // ---------- Funções ----------
  function mostrarToast(mensagem) {
    // Objeto novo de cada vez: assim o efeito volta a correr
    // mesmo que a mensagem seja igual à anterior.
    setToast({ id: Date.now(), mensagem });
  }

  function adicionar({ texto, notas }) {
    setTarefas([...tarefas, { id: Date.now(), texto, notas, feita: false }]);
    mostrarToast("Tarefa adicionada");
  }

  function editar(id, { texto, notas }) {
    setTarefas(tarefas.map((t) => (t.id === id ? { ...t, texto, notas } : t)));
    mostrarToast("Tarefa atualizada");
  }

  function alternar(id) {
    const tarefa = tarefas.find((t) => t.id === id);
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );
    mostrarToast(tarefa.feita ? "Tarefa reaberta" : "Tarefa concluída");
  }

  function remover(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
    mostrarToast("Tarefa removida");
  }

  // ---------- Ecrã ----------
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tarefas={tarefas}
              adicionar={adicionar}
              editar={editar}
              alternar={alternar}
              remover={remover}
            />
          }
        />
      </Routes>

      {toast && <Toast key={toast.id} mensagem={toast.mensagem} />}
    </>
  );
}

export default App;

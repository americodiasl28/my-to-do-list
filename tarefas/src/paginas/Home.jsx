import { useState } from "react";
import { Plus } from "lucide-react";
import Tarefa from "../Tarefa.jsx";
import ModalTarefa from "../ModalTarefa.jsx";

function Home({ tarefas, adicionar, editar, alternar, remover }) {
  const [aberto, setAberto] = useState(false); // o modal está aberto?
  const [emEdicao, setEmEdicao] = useState(null); // tarefa a editar (ou null = criar)

  const porFazer = tarefas.filter((t) => t.feita === false).length;

  function abrirNova() {
    setEmEdicao(null);
    setAberto(true);
  }

  function abrirEdicao(tarefa) {
    setEmEdicao(tarefa);
    setAberto(true);
  }

  function fechar() {
    setAberto(false);
    setEmEdicao(null);
  }

  function guardar(dados) {
    if (emEdicao) {
      editar(emEdicao.id, dados);
    } else {
      adicionar(dados);
    }
    fechar();
  }

  return (
    <div>
      <h1>As minhas tarefas</h1>
      <p>
        Tens {porFazer} {porFazer === 1 ? "tarefa" : "tarefas"} por fazer
      </p>

      <button className="botao" onClick={abrirNova}>
        <Plus size={20} /> Nova tarefa
      </button>

      {tarefas.length === 0 && (
        <p className="vazio">Ainda não tens tarefas.</p>
      )}

      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            aoAlternar={alternar}
            aoEditar={abrirEdicao}
            aoRemover={remover}
          />
        ))}
      </ul>

      {aberto && (
        <ModalTarefa
          tarefaInicial={emEdicao}
          aoFechar={fechar}
          aoGuardar={guardar}
        />
      )}
    </div>
  );
}

export default Home;

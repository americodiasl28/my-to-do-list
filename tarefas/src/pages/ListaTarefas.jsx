import { Link } from "react-router-dom";
import Tarefa from "../Tarefa.jsx";
import { ArrowLeft } from "lucide-react";

function ListaTarefas({ tarefas, alternar, remover }) {
  const porFazer = tarefas.filter((t) => t.feita === false).length;

  return (
    <div>
      <h1>Tarefas</h1>
      <p>Tens {porFazer} tarefas por fazer</p>
      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            aoAlternar={alternar}
            aoRemover={remover}
          />
        ))}
      </ul>
     <Link to="/" className="voltar">
  <ArrowLeft size={20} /> Voltar 
</Link>
    </div>
  );
}

export default ListaTarefas;
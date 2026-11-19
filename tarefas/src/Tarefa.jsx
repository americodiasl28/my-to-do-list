import { Circle, CircleCheck, Pencil, Trash2 } from "lucide-react";

function Tarefa({ tarefa, aoAlternar, aoEditar, aoRemover }) {
  return (
    <li>
      <div className="conteudo">
        <span
          className={tarefa.feita ? "texto feita" : "texto"}
          onClick={() => aoAlternar(tarefa.id)}
        >
          {tarefa.feita ? <CircleCheck size={22} /> : <Circle size={22} />}
          {tarefa.texto}
        </span>
        {tarefa.notas && <p className="nota">{tarefa.notas}</p>}
      </div>

      <div className="acoes">
        <button
          className="editar"
          aria-label="Editar tarefa"
          onClick={() => aoEditar(tarefa)}
        >
          <Pencil size={18} />
        </button>
        <button
          className="remover"
          aria-label="Remover tarefa"
          onClick={() => aoRemover(tarefa.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}

export default Tarefa;

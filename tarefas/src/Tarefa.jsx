import { Circle, CircleCheck, Trash2 } from "lucide-react";
function Tarefa({ tarefa, aoAlternar, aoRemover }) {
  return (
    <li>
      <span className="texto"
        onClick={() => aoAlternar(tarefa.id)}
        style={{
          textDecoration: tarefa.feita ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
           {tarefa.feita ? <CircleCheck size={22} /> : <Circle size={22} />}
        {tarefa.texto}
      </span>
      <button className="remover" onClick={() => aoRemover(tarefa.id)}> 
           <Trash2 size={18} />
      </button>
    </li>
  );
}

export default Tarefa;
import { Plus } from "lucide-react";
function FormularioTarefa({ texto, aoMudarTexto, aoAdicionar }) {
  return (
    <div className="formulario">
      <input
        value={texto}
        onChange={(e) => aoMudarTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={aoAdicionar}>
        <Plus size={20} /> Adicionar</button>
      <p>Estás a escrever: {texto}</p>
    </div>
  );
}

export default FormularioTarefa;
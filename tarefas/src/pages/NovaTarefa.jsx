import { Link } from "react-router-dom";
import FormularioTarefa from "../FormularioTarefa.jsx";
import { ArrowLeft } from "lucide-react";

function NovaTarefa({ texto, setTexto, adicionar }) {
  return (
    <div>
      <h1>Nova tarefa</h1>
      <FormularioTarefa
        texto={texto}
        aoMudarTexto={setTexto}
        aoAdicionar={adicionar}
      />
        <Link to="/" className="voltar">
         <ArrowLeft size={20} /> Voltar 
        </Link>
    </div>
  );
}

export default NovaTarefa;
import { Link } from "react-router-dom";
import { Plus, ListChecks } from "lucide-react";  

function Home() {
  return (
    <div>
      <h1>As minhas tarefas</h1>
      <p>O que queres fazer?</p>  
        
<Link to="/nova" className="botao">
  <Plus size={22} /> Nova tarefa 
</Link>
<Link to="/tarefas" className="botao secundario">
  <ListChecks size={22} /> Ver tarefas
</Link>
<p> desenvolvido por @Américo Dias </p>
    </div>
  );
}

export default Home;
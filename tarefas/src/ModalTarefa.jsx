import { useState, useEffect } from "react";
import { X } from "lucide-react";
import FormularioTarefa from "./FormularioTarefa.jsx";

// Serve para CRIAR (sem tarefaInicial) e para EDITAR (com tarefaInicial).
function ModalTarefa({ tarefaInicial, aoFechar, aoGuardar }) {
  const aEditar = Boolean(tarefaInicial);

  const [texto, setTexto] = useState(aEditar ? tarefaInicial.texto : "");
  const [notas, setNotas] = useState(aEditar ? tarefaInicial.notas || "" : "");

  // Fechar com a tecla Escape
  useEffect(() => {
    function aoPremirTecla(e) {
      if (e.key === "Escape") aoFechar();
    }
    window.addEventListener("keydown", aoPremirTecla);
    return () => window.removeEventListener("keydown", aoPremirTecla);
  }, [aoFechar]);

  function guardar() {
    if (texto.trim() === "") return;
    aoGuardar({ texto: texto.trim(), notas: notas.trim() });
  }

  return (
    <div className="fundo-modal" onClick={aoFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-topo">
          <h2>{aEditar ? "Editar tarefa" : "Nova tarefa"}</h2>
          <button className="icone" onClick={aoFechar} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <FormularioTarefa
          texto={texto}
          notas={notas}
          aoMudarTexto={setTexto}
          aoMudarNotas={setNotas}
          aoSubmeter={guardar}
          rotuloBotao={aEditar ? "Guardar alterações" : "Adicionar"}
        />
      </div>
    </div>
  );
}

export default ModalTarefa;

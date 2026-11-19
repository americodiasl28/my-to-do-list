function FormularioTarefa({
  texto,
  notas,
  aoMudarTexto,
  aoMudarNotas,
  aoSubmeter,
  rotuloBotao,
}) {
  function aoEnviar(e) {
    e.preventDefault(); // impede o formulário de recarregar a página
    aoSubmeter();
  }

  return (
    <form className="formulario" onSubmit={aoEnviar}>
      <input
        autoFocus
        value={texto}
        onChange={(e) => aoMudarTexto(e.target.value)}
        placeholder="O que tens para fazer?"
        maxLength={120}
      />
      <textarea
        value={notas}
        onChange={(e) => aoMudarNotas(e.target.value)}
        placeholder="Anotações (opcional)"
        rows={3}
      />
      <button type="submit">{rotuloBotao}</button>
    </form>
  );
}

export default FormularioTarefa;

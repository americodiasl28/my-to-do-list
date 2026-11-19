function Toast({ mensagem }) {
  return (
    <div className="toast" role="status">
      {mensagem}
    </div>
  );
}

export default Toast;

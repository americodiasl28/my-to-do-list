# Tarefas

Aplicação de lista de tarefas feita para aprender React, pensada primeiro para telemóvel.

## Funcionalidades

- Criar, editar, concluir e remover tarefas
- Anotações opcionais em cada tarefa
- Modal para criar e editar (fecha com X, Escape ou clicando fora)
- Mensagens curtas (toast) a confirmar cada ação
- As tarefas ficam guardadas no browser (`localStorage`)

## Tecnologias

React, Vite, React Router, lucide-react

## Correr o projeto

```bash
npm install
npm run dev
```

## Estrutura

```
src/
  main.jsx             ponto de entrada
  App.jsx              estado das tarefas, funções e toast
  paginas/Home.jsx     lista e controlo do modal
  Tarefa.jsx           uma tarefa
  ModalTarefa.jsx      modal de criar/editar
  FormularioTarefa.jsx campos do formulário
  Toast.jsx            mensagem temporária
  index.css            estilos
```

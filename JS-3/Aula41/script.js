const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#nova-tarefa");
const lista = document.querySelector("#tarefas");
const mensagem = document.querySelector("#mensagem");

let tarefas = [];

function aguardar() {
  return new Promise((resolve) => setTimeout(resolve, 400));
}

async function adicionarTarefa(texto) {
  await aguardar();
  tarefas.push(texto);
}

async function removerTarefa(indice) {
  await aguardar();
  tarefas.splice(indice, 1);
}

function mostrarTarefas() {
  lista.innerHTML = "";
  tarefas.forEach((tarefa, indice) => {
    lista.innerHTML += `<li>${tarefa} <button data-indice="${indice}">Remover</button></li>`;
  });
}

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  mensagem.textContent = "Adicionando...";
  await adicionarTarefa(campoTarefa.value);
  mostrarTarefas();
  campoTarefa.value = "";
  mensagem.textContent = "Tarefa adicionada!";
});

lista.addEventListener("click", async (evento) => {
  if (!evento.target.matches("button")) return;
  mensagem.textContent = "Removendo...";
  await removerTarefa(Number(evento.target.dataset.indice));
  mostrarTarefas();
  mensagem.textContent = "Tarefa removida!";
});

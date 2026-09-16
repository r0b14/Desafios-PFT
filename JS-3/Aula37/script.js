const formulario = document.querySelector('#formulario');
const retorno = document.querySelector('#retorno');
const listaTarefas = document.querySelector('#tarefas');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = document.querySelector('#nome').value;
  retorno.textContent = `Obrigada, ${nome}! Formulário enviado com sucesso.`;
  formulario.reset();
});

document.querySelector('#adicionar').addEventListener('click', () => {
  const texto = prompt('Digite a nova tarefa:');
  if (!texto?.trim()) return;
  const item = document.createElement('li');
  item.textContent = texto.trim();
  listaTarefas.append(item);
});

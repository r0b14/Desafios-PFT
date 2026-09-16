const botao = document.querySelector('#revisar');
const lista = document.querySelector('#lista');

botao.addEventListener('click', () => {
  lista.hidden = !lista.hidden;
  botao.textContent = lista.hidden ? 'Ver pontos da revisão' : 'Ocultar pontos da revisão';
});

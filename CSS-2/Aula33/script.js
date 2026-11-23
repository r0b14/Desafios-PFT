// Script da Aula 33 - Alternância de tema Claro/Escuro
const btnTema = document.querySelector("#btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");
});

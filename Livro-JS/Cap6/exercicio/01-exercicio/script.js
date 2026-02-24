let mainDoc = document.getElementById("main");
console.log(mainDoc);

let titulo = document.getElementById("titulo");
let tituloOriginal = titulo.textContent;

console.log(titulo);
// Evento para QUANDO O MOUSE ENTRA
titulo.addEventListener("mouseover", () => {
  titulo.textContent = "Novo Titulo - Via JS";
});
// Evento para QUANDO O MOUSE SAI
titulo.addEventListener("mouseout", () => {
  titulo.textContent = tituloOriginal;
});

// 'paragrafo' aqui é uma HTMLCollection (uma lista)
let paragrafo = document.getElementsByClassName("paragrafo");
console.log(paragrafo);

// Verificamos se a lista não está vazia (boa prática)
if (paragrafo.length > 0) {
  // Acessamos o PRIMEIRO item (índice 0) e mudamos o HTML dele
  paragrafo[0].innerHTML = "<p>Novo Paragrafo JS</p>";
}

let button = document.getElementsByTagName("button");
console.log(button);

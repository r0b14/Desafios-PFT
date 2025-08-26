const noticias = document.querySelectorAll(".noticias");
let currentIndex = 0;

function showNoticia(index) {
  noticias.forEach((noticia, i) => {
    if (i === index) {
      noticia.setAttribute("active", "true");
    } else {
      noticia.removeAttribute("active");
    }
  });
}

// Inicializa mostrando a primeira notícia
showNoticia(currentIndex);

// Botões
const btnEsquerda = document.getElementById("botao-esquerda");
const btnDireita = document.getElementById("botao-direita");

btnEsquerda.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + noticias.length) % noticias.length;
  showNoticia(currentIndex);
});

btnDireita.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % noticias.length;
  showNoticia(currentIndex);
});
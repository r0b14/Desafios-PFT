
function getValue(element){
    // Seleciona o primeiro <p> da página (ajuste se necessário para múltiplas <p> ou use um id único)
    const p = document.querySelector('p');
    if(p) {
        p.innerText = element.innerText;
    }
    console.log(element.innerText)
}

// ------- Lógica de navegação ---------

// Obter lista de notícias e o container do banner (exibir uma <p> só)
const noticias = [
    'Este é o banner 1',
    'Este é o banner 2',
    'Este é o banner 3',
    'Este é o banner 4'
];
let indiceAtual = 0;

function mostrarNoticia(index) {
    const noticiaAtiva = noticias[index];
    // Atualiza o texto do primeiro <p>
    const p = document.querySelector('#container-noticias p');
    if (p) {
        p.innerText = noticiaAtiva;
    }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', function() {
    mostrarNoticia(indiceAtual);

    document.getElementById('botao-esquerda').addEventListener('click', function() {
        indiceAtual = (indiceAtual - 1 + noticias.length) % noticias.length;
        mostrarNoticia(indiceAtual);
    });
    document.getElementById('botao-direita').addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % noticias.length;
        mostrarNoticia(indiceAtual);
    });
});

/**
 * Aula 52 - Miniprojeto: Biblioteca "Saber Infinito"
 * Reorganização de catálogo de livros com corte, junção e spread operator (...).
 */

// 1. Catálogo inicial de livros da biblioteca
let catalogoPrincipal = [
  "O Pequeno Príncipe",
  "1984",
  "Capitães da Areia",
  "O Alquimista"
];

// Outra seção de livros para demonstrar a combinação com spread operator
const secaoCiencias = [
  "Uma Breve História do Tempo",
  "Cosmos"
];

// ====================================================
// 2. Funções requeridas pelo desafio
// ====================================================

// 1) Trocar um livro por outro na mesma posição
function trocarLivro(catalogo, posicao, novoLivro) {
  if (posicao >= 0 && posicao < catalogo.length) {
    const livroAntigo = catalogo[posicao];
    // Substitui diretamente no índice do array
    catalogo[posicao] = novoLivro;
    return `Livro "${livroAntigo}" foi substituído por "${novoLivro}" na posição ${posicao}.`;
  }
  return "Posição inválida para substituição.";
}

// 2) Adicionar um novo livro no início da lista
function adicionarNoInicio(catalogo, novoLivro) {
  // unshift insere o elemento no índice 0
  catalogo.unshift(novoLivro);
  return `"${novoLivro}" adicionado ao início da lista.`;
}

// 3) Adicionar um novo livro ao final da lista
function adicionarNoFinal(catalogo, novoLivro) {
  // push insere o elemento no fim do array
  catalogo.push(novoLivro);
  return `"${novoLivro}" adicionado ao final da lista.`;
}

// 4) Adicionar um novo livro em uma posição específica
function adicionarEmPosicao(catalogo, posicao, novoLivro) {
  // splice(indice, quantosRemover, novoItem)
  // O segundo parâmetro 0 significa que nada será apagado, apenas inserido
  catalogo.splice(posicao, 0, novoLivro);
  return `"${novoLivro}" inserido na posição ${posicao}.`;
}

// 5) Remover um livro de uma posição específica
function removerDePosicao(catalogo, posicao) {
  if (posicao >= 0 && posicao < catalogo.length) {
    // splice(posicao, 1) remove exatamente 1 item daquela posição
    const removidos = catalogo.splice(posicao, 1);
    return `Livro "${removidos[0]}" removido da posição ${posicao}.`;
  }
  return "Posição inválida para remoção.";
}

// 6) Combinar listas de livros de diferentes seções usando o operador de espalhamento (spread)
function combinarSecoes(secao1, secao2) {
  // O operador ... "espalha" os elementos dos dois arrays dentro de um novo array
  return [...secao1, ...secao2];
}

// ====================================================
// 3. Integração com o DOM (Interface da página)
// ====================================================

const inputTitulo = document.querySelector("#titulo-livro");
const inputPosicao = document.querySelector("#posicao-livro");
const listaLivrosElemento = document.querySelector("#lista-livros");
const statusMensagem = document.querySelector("#mensagem-status");

// Função para atualizar a visualização da lista no HTML
function renderizarCatalogo() {
  listaLivrosElemento.innerHTML = "";

  if (catalogoPrincipal.length === 0) {
    listaLivrosElemento.innerHTML = "<li>Nenhum livro no catálogo.</li>";
    return;
  }

  catalogoPrincipal.forEach((livro, index) => {
    const item = document.createElement("li");
    item.textContent = `[Posição ${index}] - ${livro}`;
    listaLivrosElemento.appendChild(item);
  });
}

// Evento: Substituir livro na posição
document.querySelector("#btn-substituir").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  const pos = parseInt(inputPosicao.value, 10);

  if (!titulo) {
    statusMensagem.textContent = "Digite o título do livro para substituir.";
    return;
  }

  statusMensagem.textContent = trocarLivro(catalogoPrincipal, pos, titulo);
  inputTitulo.value = "";
  renderizarCatalogo();
});

// Evento: Inserir em posição específica
document.querySelector("#btn-add-posicao").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  const pos = parseInt(inputPosicao.value, 10);

  if (!titulo) {
    statusMensagem.textContent = "Digite o título do livro.";
    return;
  }

  statusMensagem.textContent = adicionarEmPosicao(catalogoPrincipal, pos, titulo);
  inputTitulo.value = "";
  renderizarCatalogo();
});

// Evento: Adicionar no Início
document.querySelector("#btn-add-inicio").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  if (!titulo) {
    statusMensagem.textContent = "Digite o título do livro.";
    return;
  }

  statusMensagem.textContent = adicionarNoInicio(catalogoPrincipal, titulo);
  inputTitulo.value = "";
  renderizarCatalogo();
});

// Evento: Adicionar no Final
document.querySelector("#btn-add-final").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  if (!titulo) {
    statusMensagem.textContent = "Digite o título do livro.";
    return;
  }

  statusMensagem.textContent = adicionarNoFinal(catalogoPrincipal, titulo);
  inputTitulo.value = "";
  renderizarCatalogo();
});

// Evento: Remover da posição
document.querySelector("#btn-remover-posicao").addEventListener("click", () => {
  const pos = parseInt(inputPosicao.value, 10);
  statusMensagem.textContent = removerDePosicao(catalogoPrincipal, pos);
  renderizarCatalogo();
});

// Evento: Combinar seções com spread
document.querySelector("#btn-combinar-secoes").addEventListener("click", () => {
  catalogoPrincipal = combinarSecoes(catalogoPrincipal, secaoCiencias);
  statusMensagem.textContent = "Seção de Ciências combinada com sucesso usando spread (...).";
  renderizarCatalogo();
});

// Inicialização da tela
renderizarCatalogo();

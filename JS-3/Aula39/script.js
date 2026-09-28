const campoBusca = document.querySelector("#busca");
const botaoBuscar = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

const produtos = ["livro", "fone", "teclado"];

function buscarProduto(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produtos.includes(nome)) {
        resolve(`Produto encontrado: ${nome}`);
      } else {
        reject("Produto não encontrado.");
      }
    }, 1000);
  });
}

async function realizarBusca() {
  const nome = campoBusca.value.toLowerCase().trim();
  resultado.textContent = "Buscando...";

  try {
    const mensagem = await buscarProduto(nome);
    resultado.textContent = mensagem;
  } catch (erro) {
    resultado.textContent = erro;
  }
}

botaoBuscar.addEventListener("click", realizarBusca);

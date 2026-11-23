/**
 * Aula 55 - Miniprojeto: Plantações de Arrayville
 * Classe com métodos de ordenação e comparação de arrays.
 */

// 1. Definição da classe Plantacoes
class Plantacoes {
  constructor(frutasIniciais = [], vegetaisIniciais = []) {
    // Inicializamos os atributos com os arrays recebidos
    this.frutas = frutasIniciais;
    this.vegetais = vegetaisIniciais;
  }

  // 1) Função para ordenar as listas de frutas e vegetais em ordem alfabética
  ordenarColheitas() {
    // localeCompare assegura a ordenação alfabética correta em português (com acentos)
    this.frutas.sort((a, b) => a.localeCompare(b));
    this.vegetais.sort((a, b) => a.localeCompare(b));
  }

  // 2) Função para informar qual das listas tem o maior tamanho
  informarMaiorTamanho() {
    const qtdFrutas = this.frutas.length;
    const qtdVegetais = this.vegetais.length;

    if (qtdFrutas > qtdVegetais) {
      return `A lista de FRUTAS é maior (${qtdFrutas} itens) que a de VEGETAIS (${qtdVegetais} itens).`;
    } else if (qtdVegetais > qtdFrutas) {
      return `A lista de VEGETAIS é maior (${qtdVegetais} itens) que a de FRUTAS (${qtdFrutas} itens).`;
    } else {
      return `Ambas as listas possuem o MESMO tamanho (${qtdFrutas} itens cada).`;
    }
  }

  // 3) Função que recebe outra lista de frutas e compara se é igual à lista da classe
  compararFrutas(outraLista) {
    // Se os tamanhos forem diferentes, as listas com certeza não são iguais
    if (this.frutas.length !== outraLista.length) {
      return false;
    }

    // Usamos every para verificar se cada elemento na mesma posição é idêntico
    return this.frutas.every((fruta, index) => fruta === outraLista[index]);
  }

  // 4) Função que informa se alguma das listas está vazia (ainda não houve colheita)
  verificarSeAlgumaEstaVazia() {
    const frutasVazia = this.frutas.length === 0;
    const vegetaisVazia = this.vegetais.length === 0;

    if (frutasVazia && vegetaisVazia) {
      return "Ambas as plantações estão vazias (nenhuma colheita).";
    } else if (frutasVazia) {
      return "A lista de frutas está vazia.";
    } else if (vegetaisVazia) {
      return "A lista de vegetais está vazia.";
    } else {
      return "Nenhuma lista está vazia! Ambas as plantações já tiveram colheitas.";
    }
  }
}

// ====================================================
// 2. Instanciação e Integração com a página
// ====================================================

// Criamos uma instância de Plantacoes com dados iniciais
const fazendaCentral = new Plantacoes(
  ["Manga", "Banana", "Abacaxi", "Laranja", "Uva"],
  ["Cenoura", "Batata", "Brócolis", "Abobrinha"]
);

const listaFrutasEl = document.querySelector("#lista-frutas");
const listaVegetaisEl = document.querySelector("#lista-vegetais");
const painelResultado = document.querySelector("#resultado-painel");

// Função para atualizar as listas na tela
function atualizarTela() {
  listaFrutasEl.innerHTML = "";
  listaVegetaisEl.innerHTML = "";

  fazendaCentral.frutas.forEach((fruta) => {
    const li = document.createElement("li");
    li.textContent = fruta;
    listaFrutasEl.appendChild(li);
  });

  fazendaCentral.vegetais.forEach((veg) => {
    const li = document.createElement("li");
    li.textContent = veg;
    listaVegetaisEl.appendChild(li);
  });
}

// Botão 1: Ordenar em ordem alfabética
document.querySelector("#btn-ordenar").addEventListener("click", () => {
  fazendaCentral.ordenarColheitas();
  atualizarTela();
  painelResultado.textContent = "Colheitas ordenadas em ordem alfabética com sucesso!";
});

// Botão 2: Informar qual é maior
document.querySelector("#btn-maior").addEventListener("click", () => {
  painelResultado.textContent = fazendaCentral.informarMaiorTamanho();
});

// Botão 3: Verificar lista vazia
document.querySelector("#btn-vazia").addEventListener("click", () => {
  painelResultado.textContent = fazendaCentral.verificarSeAlgumaEstaVazia();
});

// Botão 4: Comparar frutas com outra lista de teste
document.querySelector("#btn-comparar").addEventListener("click", () => {
  // Lista de teste para comparação
  const remessaVizinha = ["Abacaxi", "Banana", "Laranja", "Manga", "Uva"];
  const saoIguais = fazendaCentral.compararFrutas(remessaVizinha);

  painelResultado.innerHTML = `
    Lista da remessa vizinha: [${remessaVizinha.join(", ")}]<br>
    Lista atual de frutas: [${fazendaCentral.frutas.join(", ")}]<br>
    As listas são exatamente iguais em conteúdo e ordem? <strong>${saoIguais ? "SIM" : "NÃO (ordene antes se necessário)"}</strong>
  `;
});

// Inicializa a tela com as listas
atualizarTela();

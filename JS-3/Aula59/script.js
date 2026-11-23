/**
 * Aula 59 - Miniprojeto: Paradigmas de Programação em JavaScript
 * Comparação prática: Imperativo, Funcional e Orientado a Objetos.
 */

// Lista de produtos para teste em todos os paradigmas
const produtos = [
  { nome: "Mochila", preco: 80.0 },
  { nome: "Caderno", preco: 25.0 },
  { nome: "Estojo", preco: 15.0 },
  { nome: "Tênis", preco: 120.0 }
];

// ====================================================
// 1. Paradigma IMPERATIVO
// Ferramentas: for, if, let (mutação de variável acumuladora)
// ====================================================
function calcularTotalImperativo(lista) {
  // let cria uma variável que pode mudar de valor (mutável)
  let total = 0;

  // for controla o laço passo a passo com o índice i
  for (let i = 0; i < lista.length; i++) {
    let precoItem = lista[i].preco;

    // if toma decisões no fluxo de execução
    if (precoItem > 50) {
      precoItem = precoItem * 0.9; // Desconto de 10%
    }

    // Acumula manualmente o valor na variável total
    total += precoItem;
  }

  return total;
}

// ====================================================
// 2. Paradigma FUNCIONAL
// Ferramentas: map, filter, reduce (funções puras e imutabilidade)
// ====================================================
function calcularTotalFuncional(lista) {
  // map: calcula o preço com desconto sem alterar os objetos originais
  const precosComDesconto = lista.map((item) =>
    item.preco > 50 ? item.preco * 0.9 : item.preco
  );

  // reduce: combina todos os preços em uma soma final acumulada
  const total = precosComDesconto.reduce((acumulado, preco) => acumulado + preco, 0);

  return total;
}

// ====================================================
// 3. Paradigma ORIENTADO A OBJETOS (OO)
// Ferramentas: class, constructor, this (encapsulamento de dados e métodos)
// ====================================================
class CarrinhoDeCompras {
  // constructor inicializa os atributos da instância
  constructor() {
    this.itens = []; // this faz referência à própria instância do carrinho
  }

  // Método para adicionar produtos ao carrinho
  adicionarItem(produto) {
    this.itens.push(produto);
  }

  // Método que encapsula a regra de cálculo do total
  calcularTotal() {
    let total = 0;
    for (const item of this.itens) {
      const precoFinal = item.preco > 50 ? item.preco * 0.9 : item.preco;
      total += precoFinal;
    }
    return total;
  }
}

function calcularTotalOO(lista) {
  const meuCarrinho = new CarrinhoDeCompras();
  lista.forEach((p) => meuCarrinho.adicionarItem(p));
  return meuCarrinho.calcularTotal();
}

// ====================================================
// 4. Integração com a interface HTML
// ====================================================

const tituloEl = document.querySelector("#titulo-paradigma");
const ferramentasEl = document.querySelector("#ferramentas-paradigma");
const blocoCodigoEl = document.querySelector("#bloco-codigo");
const resultadoEl = document.querySelector("#resultado-execucao");

// Textos dos códigos para exibir didaticamente aos alunos
const codigosExemplo = {
  imperativo: `// 1. Paradigma Imperativo:
function calcularTotalImperativo(lista) {
  let total = 0; // Estado mutável
  for (let i = 0; i < lista.length; i++) { // Laço explícito
    let precoItem = lista[i].preco;
    if (precoItem > 50) { // Condicional
      precoItem = precoItem * 0.9;
    }
    total += precoItem;
  }
  return total;
}`,

  funcional: `// 2. Paradigma Funcional:
function calcularTotalFuncional(lista) {
  // map transforma os dados sem alterar a lista original
  const precos = lista.map(item => item.preco > 50 ? item.preco * 0.9 : item.preco);
  
  // reduce agrega a soma total
  return precos.reduce((acumulado, p) => acumulado + p, 0);
}`,

  oo: `// 3. Paradigma Orientado a Objetos:
class CarrinhoDeCompras {
  constructor() {
    this.itens = []; // Atributo da instância
  }

  adicionarItem(produto) {
    this.itens.push(produto); // Método que age sobre o estado interno
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => {
      const preco = item.preco > 50 ? item.preco * 0.9 : item.preco;
      return total + preco;
    }, 0);
  }
}`
};

// Função para alternar a exibição
function mostrarParadigma(tipo) {
  document.querySelectorAll(".btn-paradigma").forEach((b) => b.classList.remove("ativo"));

  if (tipo === "imperativo") {
    document.querySelector("#btn-imperativo").classList.add("ativo");
    tituloEl.textContent = "1. Paradigma Imperativo";
    ferramentasEl.innerHTML = "<strong>3 ferramentas selecionadas:</strong> <code>for</code> (repetição), <code>if</code> (decisão) e <code>let</code> (mutação de variável).";
    blocoCodigoEl.textContent = codigosExemplo.imperativo;
    const total = calcularTotalImperativo(produtos);
    resultadoEl.textContent = `Total final calculado: R$ ${total.toFixed(2)}`;
  } else if (tipo === "funcional") {
    document.querySelector("#btn-funcional").classList.add("ativo");
    tituloEl.textContent = "2. Paradigma Funcional";
    ferramentasEl.innerHTML = "<strong>3 ferramentas selecionadas:</strong> <code>map</code> (transformação), <code>filter</code> (seleção) e <code>reduce</code> (acumulação declarativa).";
    blocoCodigoEl.textContent = codigosExemplo.funcional;
    const total = calcularTotalFuncional(produtos);
    resultadoEl.textContent = `Total final calculado: R$ ${total.toFixed(2)}`;
  } else if (tipo === "oo") {
    document.querySelector("#btn-oo").classList.add("ativo");
    tituloEl.textContent = "3. Paradigma Orientado a Objetos";
    ferramentasEl.innerHTML = "<strong>3 ferramentas selecionadas:</strong> <code>class</code> (molde/classe), <code>constructor</code> (inicializador) e <code>this</code> (escopo da instância).";
    blocoCodigoEl.textContent = codigosExemplo.oo;
    const total = calcularTotalOO(produtos);
    resultadoEl.textContent = `Total final calculado: R$ ${total.toFixed(2)}`;
  }
}

document.querySelector("#btn-imperativo").addEventListener("click", () => mostrarParadigma("imperativo"));
document.querySelector("#btn-funcional").addEventListener("click", () => mostrarParadigma("funcional"));
document.querySelector("#btn-oo").addEventListener("click", () => mostrarParadigma("oo"));

// Inicialização com o primeiro paradigma
mostrarParadigma("imperativo");

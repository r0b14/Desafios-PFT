/**
 * Aula 56 - Miniprojeto: Gerenciamento de Inventário de Loja Virtual
 * Manipulação de objetos em JavaScript: criação, alteração de propriedades e busca.
 */

// 1. Array de objetos representando o inventário da loja virtual
let inventario = [
  { codigo: 101, nome: "Teclado Básico", preco: 45.0, quantidade: 20 },
  { codigo: 102, nome: "Mouse Óptico", preco: 25.5, quantidade: 35 },
  { codigo: 103, nome: "Headset USB", preco: 120.0, quantidade: 10 },
  { codigo: 104, nome: "Cabo Tipo-C", preco: 18.0, quantidade: 50 }
];

// ====================================================
// 2. Funções separadas para cada operação requerida
// ====================================================

// 1) Adicionar um novo produto ao inventário
function adicionarProduto(lista, novoProduto) {
  // Verificamos se já existe um produto com o mesmo código
  const jaExiste = lista.some((p) => p.codigo === novoProduto.codigo);
  if (jaExiste) {
    return `Erro: Já existe um produto com o código ${novoProduto.codigo}.`;
  }

  lista.push(novoProduto);
  return `Produto "${novoProduto.nome}" adicionado com sucesso!`;
}

// 2) Remover um produto através do código
function removerProduto(lista, codigo) {
  const indice = lista.findIndex((p) => p.codigo === codigo);
  if (indice !== -1) {
    const removido = lista.splice(indice, 1)[0];
    return `Produto "${removido.nome}" (código ${codigo}) foi removido.`;
  }
  return `Produto com código ${codigo} não encontrado para remoção.`;
}

// 3) Atualizar a quantidade de um produto (aumentar ou diminuir)
function atualizarQuantidade(lista, codigo, novaQuantidade) {
  const produto = lista.find((p) => p.codigo === codigo);
  if (produto) {
    produto.quantidade = novaQuantidade; // Modifica a propriedade do objeto
    return `Quantidade do produto "${produto.nome}" atualizada para ${novaQuantidade}.`;
  }
  return `Produto com código ${codigo} não encontrado.`;
}

// 4) Atualizar o preço de um produto
function atualizarPreco(lista, codigo, novoPreco) {
  const produto = lista.find((p) => p.codigo === codigo);
  if (produto) {
    produto.preco = novoPreco; // Modifica a propriedade preco
    return `Preço do produto "${produto.nome}" atualizado para R$ ${novoPreco.toFixed(2)}.`;
  }
  return `Produto com código ${codigo} não encontrado.`;
}

// 5) Verificar se um produto específico existe (por código)
function verificarProdutoExiste(lista, codigo) {
  const produto = lista.find((p) => p.codigo === codigo);
  return produto ? true : false;
}

// 6) Retornar os produtos mais baratos que um valor específico X
function buscarMaisBaratosQue(lista, valorMaximo) {
  // filter retorna um novo array apenas com os objetos que atendem à condição
  return lista.filter((p) => p.preco < valorMaximo);
}

// ====================================================
// 3. Integração com a interface HTML
// ====================================================

const inputCodigo = document.querySelector("#prod-codigo");
const inputNome = document.querySelector("#prod-nome");
const inputPreco = document.querySelector("#prod-preco");
const inputQtd = document.querySelector("#prod-qtd");
const statusMsg = document.querySelector("#mensagem-status");
const corpoTabela = document.querySelector("#corpo-tabela");

// Função para renderizar a tabela na tela
function renderizarTabela(dadosParaExibir = inventario) {
  corpoTabela.innerHTML = "";

  if (dadosParaExibir.length === 0) {
    corpoTabela.innerHTML = "<tr><td colspan='4'>Nenhum produto encontrado.</td></tr>";
    return;
  }

  dadosParaExibir.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.codigo}</td>
      <td>${item.nome}</td>
      <td>R$ ${item.preco.toFixed(2)}</td>
      <td>${item.quantidade} un.</td>
    `;
    corpoTabela.appendChild(tr);
  });
}

// Botão: Adicionar
document.querySelector("#btn-adicionar").addEventListener("click", () => {
  const codigo = parseInt(inputCodigo.value, 10);
  const nome = inputNome.value.trim();
  const preco = parseFloat(inputPreco.value);
  const quantidade = parseInt(inputQtd.value, 10);

  if (!codigo || !nome || isNaN(preco) || isNaN(quantidade)) {
    statusMsg.textContent = "Preencha todos os campos do produto corretamente.";
    return;
  }

  const novoProduto = { codigo, nome, preco, quantidade };
  statusMsg.textContent = adicionarProduto(inventario, novoProduto);
  renderizarTabela();
});

// Botão: Atualizar Quantidade
document.querySelector("#btn-atualizar-qtd").addEventListener("click", () => {
  const codigo = parseInt(inputCodigo.value, 10);
  const quantidade = parseInt(inputQtd.value, 10);

  if (!codigo || isNaN(quantidade)) {
    statusMsg.textContent = "Informe o código e a nova quantidade.";
    return;
  }

  statusMsg.textContent = atualizarQuantidade(inventario, codigo, quantidade);
  renderizarTabela();
});

// Botão: Atualizar Preço
document.querySelector("#btn-atualizar-preco").addEventListener("click", () => {
  const codigo = parseInt(inputCodigo.value, 10);
  const preco = parseFloat(inputPreco.value);

  if (!codigo || isNaN(preco)) {
    statusMsg.textContent = "Informe o código e o novo preço.";
    return;
  }

  statusMsg.textContent = atualizarPreco(inventario, codigo, preco);
  renderizarTabela();
});

// Botão: Verificar se existe
document.querySelector("#btn-verificar").addEventListener("click", () => {
  const codigo = parseInt(inputCodigo.value, 10);
  if (!codigo) {
    statusMsg.textContent = "Digite o código para verificar.";
    return;
  }

  const existe = verificarProdutoExiste(inventario, codigo);
  statusMsg.textContent = existe
    ? `O produto com código ${codigo} ESTÁ cadastrado no sistema.`
    : `O produto com código ${codigo} NÃO existe no inventário.`;
});

// Botão: Remover Produto
document.querySelector("#btn-remover").addEventListener("click", () => {
  const codigo = parseInt(inputCodigo.value, 10);
  if (!codigo) {
    statusMsg.textContent = "Digite o código do produto que deseja remover.";
    return;
  }

  statusMsg.textContent = removerProduto(inventario, codigo);
  renderizarTabela();
});

// Botão: Filtrar mais baratos
document.querySelector("#btn-filtrar-baratos").addEventListener("click", () => {
  const valorMax = parseFloat(document.querySelector("#filtro-preco").value);
  if (isNaN(valorMax)) {
    statusMsg.textContent = "Digite um valor numérico para o filtro de preço.";
    return;
  }

  const baratos = buscarMaisBaratosQue(inventario, valorMax);
  statusMsg.textContent = `Exibindo ${baratos.length} produto(s) mais barato(s) que R$ ${valorMax.toFixed(2)}.`;
  renderizarTabela(baratos);
});

// Exibe a tabela inicial
renderizarTabela();

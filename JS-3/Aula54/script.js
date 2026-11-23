/**
 * Aula 54 - Miniprojeto: Análise de Notas do Carnaval do Rio de Janeiro
 * Métodos de busca e verificação: find, findIndex, includes, every, some.
 */

// Array de notas fornecido no enunciado
const notas = [
  7.5, 10, 8.0, 6.9, 8.9, 10, 9.9, 8.6, 7.5, 9.5, 9.6, 7.9, 8.0, 9.8,
  10, 10, 10, 7.0, 9.6, 8.9, 9.9, 8.6, 7.5, 5.5, 9.6, 7.9, 8.0, 9.8, 10, 10
];

// ====================================================
// Funções requeridas pelo desafio
// ====================================================

// 1. Encontrar a primeira escola com nota acima de um determinado valor
function encontrarPrimeiraNotaAcima(lista, valor) {
  // find retorna o PRIMEIRO elemento que satisfaz a condição
  return lista.find((nota) => nota > valor);
}

// 2. Encontrar o índice da primeira escola com nota abaixo de um determinado valor
function encontrarIndicePrimeiraNotaAbaixo(lista, valor) {
  // findIndex retorna a POSIÇÃO (índice) do primeiro elemento que satisfaz a condição
  return lista.findIndex((nota) => nota < valor);
}

// 3. Verificar se uma determinada nota está presente na lista
function verificarNotaPresente(lista, notaBuscada) {
  // includes retorna true se o elemento existir exatamente no array
  return lista.includes(notaBuscada);
}

// 4. Verificar se todas as escolas estão com nota acima da média de todas as notas
function verificarTodasAcimaDaMedia(lista) {
  // Primeiro, calculamos a média de todas as notas usando reduce
  const soma = lista.reduce((acumulado, n) => acumulado + n, 0);
  const mediaGeral = soma / lista.length;

  // every só retorna true se TODOS os elementos atenderem ao teste
  const todasMaiores = lista.every((nota) => nota > mediaGeral);

  return {
    mediaGeral: Number(mediaGeral.toFixed(2)),
    resultado: todasMaiores
  };
}

// 5. Verificar se alguma escola obteve uma nota abaixo de algum valor específico
function verificarAlgumaAbaixoDe(lista, valor) {
  // some retorna true se PELO MENOS UM elemento atender à condição
  return lista.some((nota) => nota < valor);
}

// ====================================================
// Integração com a interface HTML
// ====================================================

const inputValor = document.querySelector("#valor-teste");
const painelResultado = document.querySelector("#resultado-painel");
const exibicaoNotas = document.querySelector("#exibicao-notas");

// Exibe a lista inicial de notas
exibicaoNotas.textContent = notas.join(" | ") + ` (Total: ${notas.length} notas)`;

// Botão 1: find
document.querySelector("#btn-find").addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const encontrada = encontrarPrimeiraNotaAcima(notas, valor);

  if (encontrada !== undefined) {
    painelResultado.innerHTML = `Primeira nota encontrada acima de <strong>${valor}</strong>: <strong>${encontrada}</strong>`;
  } else {
    painelResultado.innerHTML = `Nenhuma nota acima de <strong>${valor}</strong> foi encontrada na lista.`;
  }
});

// Botão 2: findIndex
document.querySelector("#btn-findindex").addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const indice = encontrarIndicePrimeiraNotaAbaixo(notas, valor);

  if (indice !== -1) {
    painelResultado.innerHTML = `A primeira nota abaixo de <strong>${valor}</strong> está na posição/índice: <strong>${indice}</strong> (nota: ${notas[indice]}).`;
  } else {
    painelResultado.innerHTML = `Nenhuma nota abaixo de <strong>${valor}</strong> foi encontrada.`;
  }
});

// Botão 3: includes
document.querySelector("#btn-includes").addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const existe = verificarNotaPresente(notas, valor);

  painelResultado.innerHTML = existe
    ? `A nota <strong>${valor}</strong> <strong>ESTÁ PRESENTE</strong> na lista de notas.`
    : `A nota <strong>${valor}</strong> <strong>NÃO FOI ENCONTRADA</strong> na lista.`;
});

// Botão 4: every
document.querySelector("#btn-every").addEventListener("click", () => {
  const analise = verificarTodasAcimaDaMedia(notas);

  painelResultado.innerHTML = `
    Média geral das notas: <strong>${analise.mediaGeral}</strong><br>
    Todas as notas estão acima da média? <strong>${analise.resultado ? "SIM" : "NÃO"}</strong>
    <br><small>(Como a média é um ponto de equilíbrio, naturalmente existem notas abaixo dela, logo o método every retorna false).</small>
  `;
});

// Botão 5: some
document.querySelector("#btn-some").addEventListener("click", () => {
  const valor = parseFloat(inputValor.value);
  const temAlgumaAbaixo = verificarAlgumaAbaixoDe(notas, valor);

  painelResultado.innerHTML = temAlgumaAbaixo
    ? `<strong>SIM</strong>, existe pelo menos uma escola com nota abaixo de <strong>${valor}</strong>.`
    : `<strong>NÃO</strong>, nenhuma escola teve nota abaixo de <strong>${valor}</strong>.`;
});

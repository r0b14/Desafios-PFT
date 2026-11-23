/**
 * Aula 53 - Miniprojeto: Curso de Inglês "Inglês Fácil"
 * Métodos de iteração em arrays: for, forEach, map, filter, reduce, sort, slice.
 */

// Array de idades fornecido na descrição do projeto
const idades = [
  23, 15, 14, 28, 30, 19, 5, 10, 8, 45, 7, 11, 15, 20, 32, 12, 9, 26, 41, 15,
  37, 10, 22, 25, 17, 16, 19
];

// ====================================================
// Funções requeridas pelo desafio
// ====================================================

// 1. Função que retorna a quantidade de alunos que têm mais de X anos
function contarAlunosMaisDeX(lista, x) {
  // filter seleciona apenas as idades estritamente maiores que x
  const maiores = lista.filter((idade) => idade > x);
  return maiores.length;
}

// 2. Função que retorna a quantidade de alunos com menos de X anos
function contarAlunosMenosDeX(lista, x) {
  // filter seleciona apenas as idades estritamente menores que x
  const menores = lista.filter((idade) => idade < x);
  return menores.length;
}

// 3. Função que retorna a média da idade dos alunos
function calcularMediaIdades(lista) {
  if (lista.length === 0) return 0;
  // reduce soma todos os elementos do array
  const somaTotal = lista.reduce((acumulador, idade) => acumulador + idade, 0);
  const media = somaTotal / lista.length;
  // toFixed(1) arredonda para 1 casa decimal
  return Number(media.toFixed(1));
}

// 4. Função que retorna a idade do aluno mais novo
function obterAlunoMaisNovo(lista) {
  // Math.min encontra o menor valor da lista expandida com spread (...)
  return Math.min(...lista);
}

// 5. Função que retorna a idade do aluno mais velho
function obterAlunoMaisVelho(lista) {
  // Math.max encontra o maior valor da lista
  return Math.max(...lista);
}

// 6. Função que retorna a lista com os 5 alunos mais jovens
function obter5MaisJovens(lista) {
  // Criamos uma cópia com [...lista] para não alterar o array original
  // sort((a, b) => a - b) ordena de forma crescente (do menor para o maior)
  // slice(0, 5) pega os 5 primeiros itens
  return [...lista].sort((a, b) => a - b).slice(0, 5);
}

// 7. Função que retorna a lista com os 5 alunos mais velhos
function obter5MaisVelhos(lista) {
  // sort((a, b) => b - a) ordena de forma decrescente (do maior para o menor)
  // slice(0, 5) pega os 5 primeiros itens
  return [...lista].sort((a, b) => b - a).slice(0, 5);
}

// ====================================================
// Integração com a página HTML
// ====================================================

const inputIdadeCorte = document.querySelector("#idade-corte");
const painelResultado = document.querySelector("#resultado-painel");
const exibicaoIdades = document.querySelector("#exibicao-idades");

// Mostra o array de idades na tela
exibicaoIdades.textContent = idades.join(", ") + ` (Total: ${idades.length} alunos)`;

// Botão: Mais de X anos
document.querySelector("#btn-mais-x").addEventListener("click", () => {
  const x = parseInt(inputIdadeCorte.value, 10) || 0;
  const qtd = contarAlunosMaisDeX(idades, x);
  painelResultado.innerHTML = `<strong>${qtd}</strong> alunos têm mais de <strong>${x}</strong> anos.`;
});

// Botão: Menos de X anos
document.querySelector("#btn-menos-x").addEventListener("click", () => {
  const x = parseInt(inputIdadeCorte.value, 10) || 0;
  const qtd = contarAlunosMenosDeX(idades, x);
  painelResultado.innerHTML = `<strong>${qtd}</strong> alunos têm menos de <strong>${x}</strong> anos.`;
});

// Botão: Média de idades
document.querySelector("#btn-media").addEventListener("click", () => {
  const media = calcularMediaIdades(idades);
  painelResultado.innerHTML = `A média de idade dos alunos é de <strong>${media}</strong> anos.`;
});

// Botão: Mais novo e mais velho
document.querySelector("#btn-extremos").addEventListener("click", () => {
  const maisNovo = obterAlunoMaisNovo(idades);
  const maisVelho = obterAlunoMaisVelho(idades);
  painelResultado.innerHTML = `
    Aluno mais novo: <strong>${maisNovo} anos</strong><br>
    Aluno mais velho: <strong>${maisVelho} anos</strong>
  `;
});

// Botão: 5 mais jovens
document.querySelector("#btn-5-jovens").addEventListener("click", () => {
  const jovens = obter5MaisJovens(idades);
  painelResultado.innerHTML = `
    Os 5 alunos mais jovens têm as idades:<br>
    <strong>${jovens.join(" anos, ")} anos</strong>.
  `;
});

// Botão: 5 mais velhos
document.querySelector("#btn-5-velhos").addEventListener("click", () => {
  const velhos = obter5MaisVelhos(idades);
  painelResultado.innerHTML = `
    Os 5 alunos mais velhos têm as idades:<br>
    <strong>${velhos.join(" anos, ")} anos</strong>.
  `;
});

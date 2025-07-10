

// Jogo de Jokenpô - Pedra, Papel e Tesoura
console.log("=== JOGO// Estrutura de decisão para determinar o vencedor geral")
if (pontosJogador > pontosComputador) {
    console.log("PARABÉNS " + nomeJogador + "! Você venceu o jogo!");
} else if (pontosComputador > pontosJogador) {
    console.log("O Computador venceu! Tente novamente!");
} else {
    console.log("Empate! Foi um jogo muito equilibrado!");
}
console.log("Melhor de 3 rodadas!");
console.log("");

// Nome do jogador
let nomeJogador = "João"; // Mude aqui para seu nome

console.log("Bem-vindo, " + nomeJogador + "!");
console.log("");

// Array com as opções do jogo
let opcoes = ["", "Pedra", "Papel", "Tesoura"];

console.log("Opções:");
// Usando loop para mostrar as opções
for (let i = 1; i <= 3; i++) {
    console.log(i + " - " + opcoes[i]);
}
console.log("");

// Escolhas do jogador para cada rodada (mude os números para testar)
let escolhaJogador = [0, 1, 2, 3]; // [vazio, rodada1, rodada2, rodada3]

// Escolhas do computador para cada rodada (mude os números para testar)
let escolhaComputador = [0, 2, 1, 1]; // [vazio, rodada1, rodada2, rodada3]

let pontosJogador = 0;
let pontosComputador = 0;

// Array para armazenar os resultados de cada rodada
let resultados = [];

// JOGANDO AS 3 RODADAS - Usando loop for
for (let rodada = 1; rodada <= 3; rodada++) {
    console.log("=== RODADA " + rodada + " ===");
    
    console.log(nomeJogador + " escolheu: " + opcoes[escolhaJogador[rodada]]);
    console.log("Computador escolheu: " + opcoes[escolhaComputador[rodada]]);
    
    // Estrutura de decisão para determinar o vencedor
    if (escolhaJogador[rodada] == escolhaComputador[rodada]) {
        console.log("Empate na rodada " + rodada + "!");
        resultados.push("Empate");
    } else if ((escolhaJogador[rodada] == 1 && escolhaComputador[rodada] == 3) || 
               (escolhaJogador[rodada] == 2 && escolhaComputador[rodada] == 1) || 
               (escolhaJogador[rodada] == 3 && escolhaComputador[rodada] == 2)) {
        console.log(nomeJogador + " ganhou a rodada " + rodada + "!");
        pontosJogador = pontosJogador + 1;
        resultados.push("Vitória");
    } else {
        console.log("Computador ganhou a rodada " + rodada + "!");
        pontosComputador = pontosComputador + 1;
        resultados.push("Derrota");
    }
    
    console.log("Placar: " + nomeJogador + " " + pontosJogador + " x " + pontosComputador + " Computador");
    console.log("");
}

// RESULTADO FINAL
console.log("=== RESULTADO FINAL ===");
console.log("Placar Final: " + nomeJogador + " " + pontosJogador + " x " + pontosComputador + " Computador");
console.log("");

// Estrutura de decisão para determinar o vencedor geral
if (pontosJogador > pontosComputador) {
    console.log("� PARABÉNS " + nomeJogador + "! Você venceu o jogo!");
} else if (pontosComputador > pontosJogador) {
    console.log("🤖 O Computador venceu! Tente novamente!");
} else {
    console.log("🤝 Empate! Foi um jogo muito equilibrado!");
}

console.log("");

// RESUMO DAS RODADAS - Usando loop for
console.log("=== RESUMO DAS RODADAS ===");
for (let i = 0; i < resultados.length; i++) {
    let numeroRodada = i + 1;
    console.log("Rodada " + numeroRodada + ": " + resultados[i] + " (" + opcoes[escolhaJogador[numeroRodada]] + " vs " + opcoes[escolhaComputador[numeroRodada]] + ")");
}

console.log("");
console.log("=== REGRAS DO JOGO ===");
console.log(opcoes[1] + " quebra " + opcoes[3]);
console.log(opcoes[3] + " corta " + opcoes[2]);
console.log(opcoes[2] + " embrulha " + opcoes[1]);
console.log("");

// ESTATÍSTICAS - Usando loop while
console.log("=== ESTATÍSTICAS ===");
let vitorias = 0;
let derrotas = 0;
let empates = 0;
let contador = 0;

while (contador < resultados.length) {
    if (resultados[contador] == "Vitória") {
        vitorias = vitorias + 1;
    } else if (resultados[contador] == "Derrota") {
        derrotas = derrotas + 1;
    } else {
        empates = empates + 1;
    }
    contador = contador + 1;
}

console.log("Vitórias: " + vitorias);
console.log("Derrotas: " + derrotas);
console.log("Empates: " + empates);
console.log("");

console.log("=== COMO JOGAR ===");
console.log("1. Mude o valor da variável 'nomeJogador' para seu nome");
console.log("2. Mude os valores do array 'escolhaJogador' nas posições [1], [2] e [3] (1, 2 ou 3)");
console.log("3. Mude os valores do array 'escolhaComputador' nas posições [1], [2] e [3] (1, 2 ou 3)");
console.log("");
console.log("=== ENTENDENDO OS ARRAYS ===");
console.log("Array 'opcoes': " + opcoes);
console.log("Array 'escolhaJogador': " + escolhaJogador);
console.log("Array 'escolhaComputador': " + escolhaComputador);
console.log("Array 'resultados': " + resultados);

//B
//B
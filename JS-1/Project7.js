// Jogo de adivinhação de palavra
console.log("=== JOGO DE ADIVINHAÇÃO ===");
console.log("Descubra a palavra secreta!");
console.log("");

let palavraSecreta = "javascript";
console.log("Dica: A palavra tem " + palavraSecreta.length + " letras");
console.log("Palavra: _ _ _ _ _ _ _ _ _ _");
console.log("");

// Simulando tentativas (mude os valores para testar)
let tentativa1 = "a"; // Primeira tentativa
let tentativa2 = "j"; // Segunda tentativa
let tentativa3 = "s"; // Terceira tentativa

console.log("=== TENTATIVA 1 ===");
console.log("Letra tentada: " + tentativa1);

if (tentativa1 == "j") {
    console.log("Acertou! A letra 'j' está na posição 1");
    console.log("Palavra: j _ _ _ _ _ _ _ _ _");
} else if (tentativa1 == "a") {
    console.log("Acertou! A letra 'a' está na posição 2 e 4");
    console.log("Palavra: _ a _ a _ _ _ _ _ _");
} else if (tentativa1 == "v") {
    console.log("Acertou! A letra 'v' está na posição 3");
    console.log("Palavra: _ _ v _ _ _ _ _ _ _");
} else if (tentativa1 == "s") {
    console.log("Acertou! A letra 's' está na posição 5");
    console.log("Palavra: _ _ _ _ s _ _ _ _ _");
} else if (tentativa1 == "c") {
    console.log("Acertou! A letra 'c' está na posição 6");
    console.log("Palavra: _ _ _ _ _ c _ _ _ _");
} else if (tentativa1 == "r") {
    console.log("Acertou! A letra 'r' está na posição 7");
    console.log("Palavra: _ _ _ _ _ _ r _ _ _");
} else if (tentativa1 == "i") {
    console.log("Acertou! A letra 'i' está na posição 8");
    console.log("Palavra: _ _ _ _ _ _ _ i _ _");
} else if (tentativa1 == "p") {
    console.log("Acertou! A letra 'p' está na posição 9");
    console.log("Palavra: _ _ _ _ _ _ _ _ p _");
} else if (tentativa1 == "t") {
    console.log("Acertou! A letra 't' está na posição 10");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ t");
} else {
    console.log("Errou! A letra '" + tentativa1 + "' não está na palavra");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ _");
}

console.log("");
console.log("=== TENTATIVA 2 ===");
console.log("Letra tentada: " + tentativa2);

if (tentativa2 == "j") {
    console.log("Acertou! A letra 'j' está na posição 1");
    console.log("Palavra: j _ _ _ _ _ _ _ _ _");
} else if (tentativa2 == "a") {
    console.log("Acertou! A letra 'a' está na posição 2 e 4");
    console.log("Palavra: _ a _ a _ _ _ _ _ _");
} else if (tentativa2 == "v") {
    console.log("Acertou! A letra 'v' está na posição 3");
    console.log("Palavra: _ _ v _ _ _ _ _ _ _");
} else if (tentativa2 == "s") {
    console.log("Acertou! A letra 's' está na posição 5");
    console.log("Palavra: _ _ _ _ s _ _ _ _ _");
} else if (tentativa2 == "c") {
    console.log("Acertou! A letra 'c' está na posição 6");
    console.log("Palavra: _ _ _ _ _ c _ _ _ _");
} else if (tentativa2 == "r") {
    console.log("Acertou! A letra 'r' está na posição 7");
    console.log("Palavra: _ _ _ _ _ _ r _ _ _");
} else if (tentativa2 == "i") {
    console.log("Acertou! A letra 'i' está na posição 8");
    console.log("Palavra: _ _ _ _ _ _ _ i _ _");
} else if (tentativa2 == "p") {
    console.log("Acertou! A letra 'p' está na posição 9");
    console.log("Palavra: _ _ _ _ _ _ _ _ p _");
} else if (tentativa2 == "t") {
    console.log("Acertou! A letra 't' está na posição 10");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ t");
} else {
    console.log("Errou! A letra '" + tentativa2 + "' não está na palavra");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ _");
}

console.log("");
console.log("=== TENTATIVA 3 ===");
console.log("Letra tentada: " + tentativa3);

if (tentativa3 == "j") {
    console.log("Acertou! A letra 'j' está na posição 1");
    console.log("Palavra: j _ _ _ _ _ _ _ _ _");
} else if (tentativa3 == "a") {
    console.log("Acertou! A letra 'a' está na posição 2 e 4");
    console.log("Palavra: _ a _ a _ _ _ _ _ _");
} else if (tentativa3 == "v") {
    console.log("Acertou! A letra 'v' está na posição 3");
    console.log("Palavra: _ _ v _ _ _ _ _ _ _");
} else if (tentativa3 == "s") {
    console.log("Acertou! A letra 's' está na posição 5");
    console.log("Palavra: _ _ _ _ s _ _ _ _ _");
} else if (tentativa3 == "c") {
    console.log("Acertou! A letra 'c' está na posição 6");
    console.log("Palavra: _ _ _ _ _ c _ _ _ _");
} else if (tentativa3 == "r") {
    console.log("Acertou! A letra 'r' está na posição 7");
    console.log("Palavra: _ _ _ _ _ _ r _ _ _");
} else if (tentativa3 == "i") {
    console.log("Acertou! A letra 'i' está na posição 8");
    console.log("Palavra: _ _ _ _ _ _ _ i _ _");
} else if (tentativa3 == "p") {
    console.log("Acertou! A letra 'p' está na posição 9");
    console.log("Palavra: _ _ _ _ _ _ _ _ p _");
} else if (tentativa3 == "t") {
    console.log("Acertou! A letra 't' está na posição 10");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ t");
} else {
    console.log("Errou! A letra '" + tentativa3 + "' não está na palavra");
    console.log("Palavra: _ _ _ _ _ _ _ _ _ _");
}

console.log("");
console.log("=== RESULTADO FINAL ===");
console.log("A palavra secreta era: " + palavraSecreta);
console.log("");
console.log("Para jogar novamente, mude os valores das variáveis 'tentativa1', 'tentativa2' e 'tentativa3'!");


//D
//A
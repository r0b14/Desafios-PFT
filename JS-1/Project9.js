// Jogo de Adivinhação - Pontos Turísticos de Pernambuco
console.log("=== JOGO DOS PONTOS TURÍSTICOS DE PERNAMBUCO ===");
console.log("Adivinhe qual ponto turístico está representado pelo emoticon!");
console.log("");

// Escolhendo qual ponto turístico mostrar (mude o número para testar outros)
let pontoEscolhido = 1;

// Definindo o emoticon e a resposta correta baseado na escolha
let emoticon = "";
let respostaCorreta = "";
let dica = "";

if (pontoEscolhido == 1) {
    emoticon = "🏖️";
    respostaCorreta = "porto de galinhas";
    dica = "Uma das praias mais famosas do Brasil, conhecida pelas piscinas naturais";
} else if (pontoEscolhido == 2) {
    emoticon = "🏛️";
    respostaCorreta = "marco zero";
    dica = "Centro histórico do Recife, ponto de fundação da cidade";
} else if (pontoEscolhido == 3) {
    emoticon = "🎭";
    respostaCorreta = "olinda";
    dica = "Cidade histórica famosa pelo carnaval e casas coloridas";
} else if (pontoEscolhido == 4) {
    emoticon = "🌊";
    respostaCorreta = "fernando de noronha";
    dica = "Arquipélago paradisíaco, patrimônio mundial da UNESCO";
} else if (pontoEscolhido == 5) {
    emoticon = "🎪";
    respostaCorreta = "caruaru";
    dica = "Capital do forró e famosa pelo São João";
}

console.log("Emoticon: " + emoticon);
console.log("Dica: " + dica);
console.log("");

// Simulando as 3 tentativas do usuário (mude os valores para testar)
let tentativa1 = "recife";
let tentativa2 = "porto de galinhas";
let tentativa3 = "boa viagem";

let acertou = false;

console.log("=== TENTATIVA 1 ===");
console.log("Sua resposta: " + tentativa1);

if (tentativa1 == respostaCorreta) {
    console.log("🎉 PARABÉNS! Você acertou!");
    console.log("O ponto turístico é: " + respostaCorreta);
    acertou = true;
} else {
    console.log("❌ Resposta incorreta. Tente novamente!");
}

console.log("");

// Só continua se não acertou na primeira tentativa
if (acertou == false) {
    console.log("=== TENTATIVA 2 ===");
    console.log("Sua resposta: " + tentativa2);
    
    if (tentativa2 == respostaCorreta) {
        console.log("🎉 PARABÉNS! Você acertou!");
        console.log("O ponto turístico é: " + respostaCorreta);
        acertou = true;
    } else {
        console.log("❌ Resposta incorreta. Última chance!");
    }
    
    console.log("");
}

// Só continua se não acertou na segunda tentativa
if (acertou == false) {
    console.log("=== TENTATIVA 3 (ÚLTIMA CHANCE) ===");
    console.log("Sua resposta: " + tentativa3);
    
    if (tentativa3 == respostaCorreta) {
        console.log("🎉 PARABÉNS! Você acertou na última tentativa!");
        console.log("O ponto turístico é: " + respostaCorreta);
        acertou = true;
    } else {
        console.log("❌ Resposta incorreta.");
    }
    
    console.log("");
}

// Resultado final
console.log("=== RESULTADO FINAL ===");
if (acertou == true) {
    console.log("🏆 VITÓRIA! Você conseguiu adivinhar o ponto turístico!");
} else {
    console.log("😔 Suas tentativas acabaram!");
    console.log("O ponto turístico correto era: " + respostaCorreta);
    console.log("Mais sorte na próxima vez!");
}

console.log("");
console.log("=== COMO JOGAR ===");
console.log("1. Mude o valor da variável 'pontoEscolhido' (1 a 5) para escolher outro ponto turístico");
console.log("2. Mude os valores das variáveis 'tentativa1', 'tentativa2' e 'tentativa3' para suas respostas");
console.log("");
console.log("Pontos turísticos disponíveis:");
console.log("1. 🏖️ Porto de Galinhas");
console.log("2. 🏛️ Marco Zero");
console.log("3. 🎭 Olinda");
console.log("4. 🌊 Fernando de Noronha");
console.log("5. 🎪 Caruaru");

//D
//C
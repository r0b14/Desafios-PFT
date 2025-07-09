// Verificando se pode dirigir
console.log("=== VERIFICAÇÃO DE DIREÇÃO ===");

let idade1 = 20; // Mude este valor para testar outras idades

if (idade1 >= 18) {
    console.log("Idade: " + idade1 + " anos");
    console.log("Você pode dirigir!");
} else {
    console.log("Idade: " + idade1 + " anos");
    console.log("Você ainda não pode dirigir.");
}

console.log("");

// Calculando desconto para idosos
console.log("=== CÁLCULO DE DESCONTO ===");

let idade2 = 65; // Mude este valor para testar outras idades
let valor = 100.00; // Mude este valor para testar outros preços

console.log("Idade: " + idade2 + " anos");
console.log("Valor original: R$ " + valor);

if (idade2 >= 60) {
    let valorFinal = valor * 0.9; // 10% de desconto
    console.log("Desconto aplicado: 10%");
    console.log("Valor final: R$ " + valorFinal);
} else {
    console.log("Sem desconto");
    console.log("Valor final: R$ " + valor);
}

console.log("");
console.log("Para testar outros valores, mude as variáveis 'idade1', 'idade2' e 'valor' no código!");

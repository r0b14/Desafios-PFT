// Verificando se o aluno pode competir
// Regra: só pode competir se treinou E se inscreveu

console.log("=== TABELA DE COMPETIÇÃO ===");
console.log("Regra: Aluno só pode competir se treinou E se inscreveu");
console.log("");

// Caso 1: Treinou = Sim, Inscrito = Sim
let treinou1 = true;
let inscrito1 = true;
let podeCompetir1 = treinou1 && inscrito1;

// Caso 2: Treinou = Sim, Inscrito = Não
let treinou2 = true;
let inscrito2 = false;
let podeCompetir2 = treinou2 && inscrito2;

// Caso 3: Treinou = Não, Inscrito = Sim
let treinou3 = false;
let inscrito3 = true;
let podeCompetir3 = treinou3 && inscrito3;

// Caso 4: Treinou = Não, Inscrito = Não
let treinou4 = false;
let inscrito4 = false;
let podeCompetir4 = treinou4 && inscrito4;

// Mostrando os resultados no console
console.log("Treinou | Inscrito | Pode Competir");
console.log("--------|----------|---------------");

// Caso 1
let texto1_treinou, texto1_inscrito, texto1_competir;
if (treinou1 == true) {
    texto1_treinou = "Sim";
} else {
    texto1_treinou = "Não";
}
if (inscrito1 == true) {
    texto1_inscrito = "Sim";
} else {
    texto1_inscrito = "Não";
}
if (podeCompetir1 == true) {
    texto1_competir = "Sim";
} else {
    texto1_competir = "Não";
}
console.log("  " + texto1_treinou + "   |    " + texto1_inscrito + "    |      " + texto1_competir);

// Caso 2
let texto2_treinou, texto2_inscrito, texto2_competir;
if (treinou2 == true) {
    texto2_treinou = "Sim";
} else {
    texto2_treinou = "Não";
}
if (inscrito2 == true) {
    texto2_inscrito = "Sim";
} else {
    texto2_inscrito = "Não";
}
if (podeCompetir2 == true) {
    texto2_competir = "Sim";
} else {
    texto2_competir = "Não";
}
console.log("  " + texto2_treinou + "   |    " + texto2_inscrito + "    |      " + texto2_competir);

// Caso 3
let texto3_treinou, texto3_inscrito, texto3_competir;
if (treinou3 == true) {
    texto3_treinou = "Sim";
} else {
    texto3_treinou = "Não";
}
if (inscrito3 == true) {
    texto3_inscrito = "Sim";
} else {
    texto3_inscrito = "Não";
}
if (podeCompetir3 == true) {
    texto3_competir = "Sim";
} else {
    texto3_competir = "Não";
}
console.log("  " + texto3_treinou + "   |    " + texto3_inscrito + "    |      " + texto3_competir);

// Caso 4
let texto4_treinou, texto4_inscrito, texto4_competir;
if (treinou4 == true) {
    texto4_treinou = "Sim";
} else {
    texto4_treinou = "Não";
}
if (inscrito4 == true) {
    texto4_inscrito = "Sim";
} else {
    texto4_inscrito = "Não";
}
if (podeCompetir4 == true) {
    texto4_competir = "Sim";
} else {
    texto4_competir = "Não";
}
console.log("  " + texto4_treinou + "   |    " + texto4_inscrito + "    |      " + texto4_competir);

// Festival Cultural - Apresentações
console.log("=== FESTIVAL CULTURAL ===");
console.log("");

// Informações das apresentações (usando variáveis simples)
let nome1 = "Maracatu Nação Leão Coroado";
let tipo1 = "Maracatu";
let horario1 = "16:00";
let local1 = "Praça do Carmo";

let nome2 = "Banda Som da Terra";
let tipo2 = "Show Musical";
let horario2 = "18:30";
let local2 = "Palco Principal";

let nome3 = "Grupo de Dança Raízes";
let tipo3 = "Dança Popular";
let horario3 = "14:00";
let local3 = "Teatro Municipal";

let nome4 = "Poetas do Sertão";
let tipo4 = "Declamação de Poesia";
let horario4 = "15:30";
let local4 = "Sala Cultural Nordeste";

// Mostrando as apresentações
console.log("=== APRESENTAÇÕES ===");
console.log("");

console.log("Apresentação 1:");
console.log("Nome: " + nome1);
console.log("Tipo: " + tipo1);
console.log("");

console.log("Apresentação 2:");
console.log("Nome: " + nome2);
console.log("Tipo: " + tipo2);
console.log("");

console.log("Apresentação 3:");
console.log("Nome: " + nome3);
console.log("Tipo: " + tipo3);
console.log("");

console.log("Apresentação 4:");
console.log("Nome: " + nome4);
console.log("Tipo: " + tipo4);
console.log("");

// Mostrando detalhes completos
console.log("=== DETALHES DAS APRESENTAÇÕES ===");
console.log("");

console.log("Apresentação 1 - Detalhes:");
console.log("Nome: " + nome1);
console.log("Horário: " + horario1);
console.log("Local: " + local1);
console.log("");

console.log("Apresentação 2 - Detalhes:");
console.log("Nome: " + nome2);
console.log("Horário: " + horario2);
console.log("Local: " + local2);
console.log("");

console.log("Apresentação 3 - Detalhes:");
console.log("Nome: " + nome3);
console.log("Horário: " + horario3);
console.log("Local: " + local3);
console.log("");

console.log("Apresentação 4 - Detalhes:");
console.log("Nome: " + nome4);
console.log("Horário: " + horario4);
console.log("Local: " + local4);
console.log("");

// Busca por tipo de apresentação (mude o valor para testar)
let tipoBuscado = "Dança Popular";

console.log("=== BUSCA POR TIPO ===");
console.log("Procurando por: " + tipoBuscado);
console.log("");

if (tipo1 == tipoBuscado) {
    console.log("Encontrado: " + nome1 + " - " + horario1 + " no " + local1);
}

if (tipo2 == tipoBuscado) {
    console.log("Encontrado: " + nome2 + " - " + horario2 + " no " + local2);
}

if (tipo3 == tipoBuscado) {
    console.log("Encontrado: " + nome3 + " - " + horario3 + " no " + local3);
}

if (tipo4 == tipoBuscado) {
    console.log("Encontrado: " + nome4 + " - " + horario4 + " no " + local4);
}

console.log("");
console.log("Para buscar outros tipos, mude o valor da variável 'tipoBuscado'!");


//B
//D
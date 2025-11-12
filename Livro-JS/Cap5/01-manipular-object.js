/*
CRIANDO UM OBJETO E ALTERANDO O VALOR DE UM PROPRIEDADE ESPECÍFICA.
 */
let student = {
    nome: "Robson",
    idade: 22,
    curse: "EC"
}

console.log(student)
// Alterando a idade
student.idade = 35;
console.log(student)

// Adicionando uma nova propriedade - Semestre
student.semestre = "2025.2";
console.log(student)
// Exercício 1
function saudacao (nome) {
    console.log(`Olá ${nome}`);
}

saudacao('Robson');

// Exercício 2

const soma = (x, y) => {
    return console.log(`A soma de ${x} + ${y} = ${x + y}`);
}

soma(10, 20);

// Exercício 3

function parOuImpar (num) {
    let verif = num % 2
    if (verif === 0) {
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
}

parOuImpar(7);
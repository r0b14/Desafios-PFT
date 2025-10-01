
// Exercício 4. Obs - dá pra tentar usar alguma função para poder colocar um "delay" no tempo que é exibido no console.
function contagemRegressiva (temp) {
    for (let i = 0; i <= temp; i++) {
        console.log(i);
    }
}

contagemRegressiva(10);

// Exercício 5 -- decobrir o porque do erro no console.log final.
function testeEscopo () {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

console.log(x)
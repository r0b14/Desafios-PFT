// Exercício 1
function saudacao(nome) {
    console.log(`Olá ${nome}`);
}

function apresentacao(coletagem) {
    let nome = "Robson"
    coletagem(nome)
    /**
        Como coletagem na verdade é saudacao, o que o JavaScript executa é saudacao("Robson").
        A função saudacao é ativada, recebendo "Robson" em seu parâmetro nome.
     */
}

apresentacao(saudacao);
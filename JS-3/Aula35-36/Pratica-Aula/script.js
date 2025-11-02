const calcularMedia = (x,y,z) => {
    return console.log(`O valor da média é : ${(x + y + z) / 3}`);
}

// Verificar a execução do código
try {
    let result = calcularMedia(1,4,9);
} catch (Error) {
    console.log("Erro ao calcularMedia: ", Error.message);
}
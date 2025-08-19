// Velocidade Média

const velocidade = (distancia, tempo) => {
  let velocidadeMedia = (distancia/tempo);
  console.info(`A velocidade média é ${velocidadeMedia.toFixed(2)} m/s`);
}

velocidade(100, 9);
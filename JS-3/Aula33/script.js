const campoNumero = document.querySelector('#numero');
const saida = document.querySelector('#resultado');

document.querySelector('#calcular').addEventListener('click', () => {
  try {
    if (campoNumero.value === '') throw new TypeError('Digite um número antes de calcular.');
    const numero = Number(campoNumero.value);
    if (numero < 0) throw new RangeError('Não existe raiz quadrada real para números negativos.');
    saida.textContent = `A raiz quadrada de ${numero} é ${Math.sqrt(numero)}.`;
  } catch (erro) {
    if (erro instanceof RangeError) saida.textContent = `Valor inválido: ${erro.message}`;
    else if (erro instanceof TypeError) saida.textContent = `Entrada inválida: ${erro.message}`;
    else saida.textContent = 'Ocorreu um erro inesperado.';
  }
});

const primeiroNumero = document.querySelector('#primeiroNumero');
const segundoNumero = document.querySelector('#segundoNumero');
const operacao = document.querySelector('#operacao');
const resultado = document.querySelector('#resultado');

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

const calcular = () => {
  const primeiro = Number(primeiroNumero.value);
  const segundo = Number(segundoNumero.value);
  let valor;

  switch (operacao.value) {
    case 'somar':
      valor = somar(primeiro, segundo);
      break;
    case 'subtrair':
      valor = subtrair(primeiro, segundo);
      break;
    default:
      resultado.textContent = 'Escolha uma operação válida.';
      return;
  }

  const sinal = valor > 0 ? 'positivo' : valor < 0 ? 'negativo' : 'zero';
  resultado.textContent = `Resultado: ${valor}. Este número é ${sinal}.`;
};

document.querySelector('#calcular').addEventListener('click', calcular);

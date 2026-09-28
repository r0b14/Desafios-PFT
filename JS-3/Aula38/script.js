const botao = document.querySelector("#iniciar");
const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");

let numero = 0;

function mostrarNumero(valor) {
  contador.textContent = valor;
}

function aumentarContador(callback) {
  setTimeout(() => {
    numero += 1;
    callback(numero);

    if (numero < 3) {
      aumentarContador(callback);
    } else {
      mensagem.textContent = "Contador finalizado!";
      botao.disabled = false;
    }
  }, 5000);
}

botao.addEventListener("click", () => {
  numero = 0;
  mostrarNumero(numero);
  mensagem.textContent = "Aguardando 5 segundos para o primeiro número...";
  botao.disabled = true;
  aumentarContador(mostrarNumero);
});

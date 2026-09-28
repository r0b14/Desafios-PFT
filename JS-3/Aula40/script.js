const seletor = document.querySelector("#resultado-escolhido");
const botaoEnviar = document.querySelector("#enviar");
const mensagem = document.querySelector("#mensagem");

function enviarPedido(resultadoEscolhido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resultadoEscolhido === "sucesso") {
        resolve("Pedido enviado com sucesso!");
      } else {
        reject("Não foi possível enviar o pedido.");
      }
    }, 1000);
  });
}

botaoEnviar.addEventListener("click", () => {
  mensagem.textContent = "Enviando pedido...";

  enviarPedido(seletor.value)
    .then((texto) => {
      mensagem.textContent = texto;
    })
    .catch((erro) => {
      mensagem.textContent = erro;
    })
    .finally(() => {
      console.log("A operação foi finalizada.");
    });
});

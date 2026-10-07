const metodo = document.querySelector("#metodo");
const botao = document.querySelector("#enviar");
const resultado = document.querySelector("#resultado");

const exemplos = {
  GET: "GET /pet/1\nBusca as informações do pet com id 1.",
  POST: "POST /pet\nAdiciona um novo pet ao catálogo.",
  PUT: "PUT /pet\nAtualiza os dados de um pet existente.",
  DELETE: "DELETE /pet/1\nRemove o pet com id 1.",
};

function simularRequisicao(metodoEscolhido) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(exemplos[metodoEscolhido]), 700);
  });
}

botao.addEventListener("click", async () => {
  resultado.textContent = "Enviando...";
  const resposta = await simularRequisicao(metodo.value);
  resultado.textContent = resposta;
});

function compararStrings(primeira, segunda, metodo) {
  const texto1 = primeira.trim().toLowerCase();
  const texto2 = segunda.trim().toLowerCase();

  if (metodo === "conteudo") {
    return texto1 === texto2;
  }

  return texto1.length === texto2.length;
}

document.querySelector("#comparar").addEventListener("click", () => {
  const primeira = document.querySelector("#primeira").value;
  const segunda = document.querySelector("#segunda").value;
  const metodo = document.querySelector("#metodo").value;
  const saoIguais = compararStrings(primeira, segunda, metodo);

  document.querySelector("#resultado").textContent = saoIguais
    ? "TRUE — as strings são iguais."
    : "FALSE — as strings são diferentes.";
});

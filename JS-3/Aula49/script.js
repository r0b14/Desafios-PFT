function formatarData(data) {
  const dataComHifens = data.replaceAll("_", "-").replaceAll(".", "-");
  const partes = dataComHifens.split("-");

  if (partes.length !== 3 || partes.some((parte) => !parte)) {
    return "Digite uma data válida.";
  }

  return partes.join("/");
}

document.querySelector("#formatar").addEventListener("click", () => {
  const dataDigitada = document.querySelector("#data").value.trim();
  document.querySelector("#resultado").textContent = formatarData(dataDigitada);
});

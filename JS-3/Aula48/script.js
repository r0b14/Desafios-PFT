class Poema {
  constructor(frase) {
    this.frase = frase;
  }

  buscarPalavra(palavra) {
    return this.frase.indexOf(palavra);
  }
  extrairTrecho(inicio, fim) {
    return this.frase.slice(inicio, fim);
  }
  substituirPalavra(antiga, nova) {
    this.frase = this.frase.replaceAll(antiga, nova);
  }
}

document.querySelector("#analisar").addEventListener("click", () => {
  const frase = document.querySelector("#frase").value;
  const palavra = document.querySelector("#palavra").value;
  const poema = new Poema(frase);
  const posicao = poema.buscarPalavra(palavra);
  const trecho = poema.extrairTrecho(0, 15);
  poema.substituirPalavra(palavra, palavra.toUpperCase());

  document.querySelector("#resultado").textContent =
    `Posição de "${palavra}": ${posicao}\nTrecho inicial: ${trecho}\nFrase alterada: ${poema.frase}`;
  console.log(poema);
});

class Caderno {
  constructor(cor, paginas, materia) {
    this.cor = cor;
    this.paginas = paginas;
    this.materia = materia;
  }

  usarPaginas(quantidade) {
    this.paginas -= quantidade;
  }
  mostrarPaginas() {
    return `${this.materia}: ${this.paginas} páginas`;
  }
  descrever() {
    return `Caderno ${this.cor} de ${this.materia}`;
  }
}

class Caneta {
  constructor(cor, tipo, carga) {
    this.cor = cor;
    this.tipo = tipo;
    this.carga = carga;
  }

  escrever() {
    this.carga -= 10;
  }
  mostrarCarga() {
    return `Caneta ${this.cor}: ${this.carga}% de carga`;
  }
  descrever() {
    return `Caneta ${this.tipo} na cor ${this.cor}`;
  }
}

document.querySelector("#mostrar").addEventListener("click", () => {
  const cadernoAzul = new Caderno("azul", 100, "JavaScript");
  const cadernoVerde = new Caderno("verde", 80, "CSS");
  const canetaPreta = new Caneta("preta", "esferográfica", 100);
  const canetaVermelha = new Caneta("vermelha", "gel", 90);

  cadernoAzul.usarPaginas(5);
  cadernoVerde.usarPaginas(3);
  canetaPreta.escrever();
  canetaVermelha.escrever();

  const itens = [cadernoAzul, cadernoVerde, canetaPreta, canetaVermelha];
  const texto = itens.map(
    (item) =>
      `${item.descrever()} — ${item.mostrarPaginas?.() || item.mostrarCarga()}`,
  );
  document.querySelector("#resultado").textContent = texto.join("\n");
  console.log(itens);
});

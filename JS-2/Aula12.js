let paises = [
  "Brasil",
  "Argentina",
  "Estados Unidos",
  "Alemanha",
  "França",
  "Japão",
  "Itália",
  "Espanha",
  "Canadá",
  "Reino Unido",
  "China",
  "Austrália",
  "México",
  "Portugal",
  "Holanda",
];

function opcoes() {
  let x = prompt(
    `Escolha uma opção:
      \n 1.Busca por nome do país:
      \n 2.Busca por posição do Ranking:
      \n 3.Mostrar lista completa:
      \n 0.Sair`
  );
  
  x = parseInt(x);
  
  if (x === 1) {
    let nomePais = prompt("Digite o nome do país: ");
    let resultado = buscarPorNome(nomePais);
    alert(resultado);
    opcoes();
  } else if (x === 2) {
    let posicao = parseInt(prompt("Digite a posição do ranking: "));
    let resultado = buscarPorPosicao(posicao);
    alert(resultado);
    opcoes();
  } else if (x === 3) {
    let resultado = listaPaises();
    alert(resultado);
    opcoes();
  } else if (x === 0) {
    alert("Saindo...");
    return;
  } else {
    alert("Opção inválida, tente novamente.");
    opcoes();
  }
}

function buscarPorNome(nomePais) {
  for (let i = 0; i < paises.length; i++) {
    if (paises[i].toLowerCase() === nomePais.toLowerCase()) {
      return `País encontrado: ${paises[i]} (Posição: ${i + 1})`;
    }
  }
  return "País não encontrado.";
}

function buscarPorPosicao(posicao) {
  if (posicao >= 1 && posicao <= paises.length) {
    return `País na posição ${posicao}: ${paises[posicao - 1]}`;
  } else {
    return "Posição inválida.";
  }
}

function listaPaises() {
  let lista = "Lista completa de países:\n\n";
  for (let i = 0; i < paises.length; i++) {
    lista += `${i + 1}. ${paises[i]}\n`;
  }
  return lista;
}

// Iniciar o programa
opcoes();


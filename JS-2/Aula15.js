const times = [
    { nome: "santa cruz", pontos: 75 },
    { nome: "flamengo", pontos: 71 },
    { nome: "palmeiras", pontos: 68 },
    { nome: "são paulo", pontos: 65 },
    { nome: "santos", pontos: 62 },
    { nome: "corinthians", pontos: 60 },
    { nome: "sport", pontos: 13 }
];

const menu = () => {
    let opcao;
    do {
        opcao = prompt("Digite o número da opção desejada:\n1. Procurar por nome do time\n2. Procurar por posição na tabela\n3. Exibir tabela completa\n4. Sair");
        switch (opcao) {
            case "1":
                procurarPorNome();
                break;
            case "2":
                procurarPorPosicao();
                break;
            case "3":
                exibirTabelaCompleta();
                break;
            case "4":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida");
                menu();
        }
    } while (opcao !== "4");
}

const procurarPorNome = () => {
    let nome = prompt("Digite o nome do time:");
    if (!nome) {
        console.log("Nenhum nome informado.");
        return;
    }
    nome = nome.toLowerCase().replace(/\s+/g, "");
    const timeEncontrado = times.find(time =>
        time.nome.toLowerCase().replace(/\s+/g, "") === nome
    );
    if (timeEncontrado) {
        console.log(`Time encontrado: ${timeEncontrado.nome} - Pontos: ${timeEncontrado.pontos}`);
    } else {
        console.log("Time não encontrado.");
    }
};

const procurarPorPosicao = () => {
    let posicao = prompt("Digite a posição do time:");
    let posicaoNumerica = parseInt(posicao);
    if (isNaN(posicaoNumerica) || posicaoNumerica < 1 || posicaoNumerica > times.length) {
        console.log("Posição inválida.");
        return;
    }
    const timeEncontrado = times[posicaoNumerica - 1];
    if (timeEncontrado) {
        console.log(`Time encontrado: ${timeEncontrado.nome} - Pontos: ${timeEncontrado.pontos}`);
    } else {
        console.log("Time não encontrado.");
    }
};

const exibirTabelaCompleta = () => {
    console.table(times);
};

//C
//D
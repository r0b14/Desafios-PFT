// Miniprojeto: Sistema de Votação para Jogos Multiplayer
// Objetivo: Contabilizar votos para os três melhores jogos multiplayer

// Expressão de função para contabilizar votos
const contabilizarVotos = function() {
    // Variáveis para armazenar a contagem de votos de cada jogo
    let votosJogoA = 0;
    let votosJogoB = 0;
    let votosJogoC = 0;
    let totalVotos = 0;
    
    // Solicitar o número de entrevistados
    const numeroEntrevistados = parseInt(prompt("Digite o número de entrevistados:"));
    
    // Validar se o número de entrevistados é válido
    if (isNaN(numeroEntrevistados) || numeroEntrevistados <= 0) {
        alert("Número de entrevistados inválido!");
        return;
    }
    
    // Loop para coletar os votos de N entrevistados
    for (let i = 1; i <= numeroEntrevistados; i++) {
        let voto = prompt(`Entrevistado ${i}, vote em um dos jogos:\nA - Jogo A\nB - Jogo B\nC - Jogo C\n\nDigite sua opção (A, B ou C):`);
        
        // Converter para maiúscula para facilitar a comparação
        if (voto) {
            voto = voto.toUpperCase();
        }
        
        // Condicionais para contabilizar votos válidos
        if (voto === "A") {
            votosJogoA++;
            totalVotos++;
        } else if (voto === "B") {
            votosJogoB++;
            totalVotos++;
        } else if (voto === "C") {
            votosJogoC++;
            totalVotos++;
        } else {
            alert(`Voto inválido do entrevistado ${i}! Por favor, digite apenas A, B ou C.`);
            i--; // Repetir a votação para este entrevistado
        }
    }
    
    // Verificar se houve votos válidos
    if (totalVotos === 0) {
        alert("Nenhum voto válido foi registrado!");
        return;
    }
    
    // Calcular porcentagens
    const porcentagemA = ((votosJogoA / totalVotos) * 100).toFixed(2);
    const porcentagemB = ((votosJogoB / totalVotos) * 100).toFixed(2);
    const porcentagemC = ((votosJogoC / totalVotos) * 100).toFixed(2);
    
    // Determinar o jogo mais votado
    let jogoMaisVotado = "";
    let maiorNumeroVotos = Math.max(votosJogoA, votosJogoB, votosJogoC);
    
    if (votosJogoA === maiorNumeroVotos) {
        jogoMaisVotado = "Jogo A";
    } else if (votosJogoB === maiorNumeroVotos) {
        jogoMaisVotado = "Jogo B";
    } else {
        jogoMaisVotado = "Jogo C";
    }
    
    // Exibir resultados
    let resultado = "=== RESULTADO DA VOTAÇÃO ===\n\n";
    resultado += `Total de votos válidos: ${totalVotos}\n\n`;
    resultado += `Jogo A: ${votosJogoA} votos (${porcentagemA}%)\n`;
    resultado += `Jogo B: ${votosJogoB} votos (${porcentagemB}%)\n`;
    resultado += `Jogo C: ${votosJogoC} votos (${porcentagemC}%)\n\n`;
    resultado += `🏆 JOGO MAIS VOTADO: ${jogoMaisVotado} com ${maiorNumeroVotos} votos!\n`;
    
    // Verificar se houve empate
    const jogosComMaiorVoto = [];
    if (votosJogoA === maiorNumeroVotos) jogosComMaiorVoto.push("Jogo A");
    if (votosJogoB === maiorNumeroVotos) jogosComMaiorVoto.push("Jogo B");
    if (votosJogoC === maiorNumeroVotos) jogosComMaiorVoto.push("Jogo C");
    
    if (jogosComMaiorVoto.length > 1) {
        resultado += `\n⚠️ Houve empate entre: ${jogosComMaiorVoto.join(", ")}`;
    }
    
    alert(resultado);
    console.log(resultado);
    
    return {
        jogoA: { votos: votosJogoA, porcentagem: porcentagemA },
        jogoB: { votos: votosJogoB, porcentagem: porcentagemB },
        jogoC: { votos: votosJogoC, porcentagem: porcentagemC },
        totalVotos: totalVotos,
        jogoMaisVotado: jogoMaisVotado
    };
};

// Expressão de função para exibir as opções de jogos
const exibirOpcoes = function() {
    console.log("=== SISTEMA DE VOTAÇÃO - MELHORES JOGOS MULTIPLAYER ===");
    console.log("Opções de jogos:");
    console.log("A - Jogo A");
    console.log("B - Jogo B");
    console.log("C - Jogo C");
    console.log("===============================================");
};

// Expressão de função para iniciar o programa
const iniciarPrograma = function() {
    const iniciar = confirm("Bem-vindo ao Sistema de Votação!\n\nDeseja iniciar a contabilização dos votos para os melhores jogos multiplayer?");
    
    if (iniciar) {
        exibirOpcoes();
        const resultado = contabilizarVotos();
        
        if (resultado) {
            console.log("Votação finalizada com sucesso!");
            console.log("Dados da votação:", resultado);
        }
    } else {
        alert("Programa cancelado pelo usuário.");
        console.log("Programa cancelado.");
    }
};

// Executar o programa
iniciarPrograma();

/**
 * Agendamento de vacinas com callbacks, setTimeout e setInterval
 */

function menuVacinas() {
  let opcao;
  do {
    opcao = prompt(`Bem-vindo ao sistema de agendamento de vacinas!
        1. Importância da Vacina contra Poliomielite
        2. Data da Campanha
        3. Idade das Crianças
        4. Unidade Básica de Saúde
        5. Lembrete Automático (setInterval)
        6. Sair
        Escolha uma opção:`);

    switch (opcao) {
      case "1":
        importanciaVacina(() => alert("Obrigado por se informar sobre a importância da vacinação!"));
        break;
      case "2":
        dataCampanha();
        break;
      case "3":
        idadeCriancas();
        break;
      case "4":
        consultarUnidadeSaude();
        break;
      case "5":
        lembreteAutomatico();
        break;
      case "6":
        alert("Saindo do sistema. Até logo!");
        break;
      default:
        alert("Opção inválida! Tente novamente.");
    }
  } while (opcao !== "6");
}

// Callback: Executa uma ação após exibir a mensagem
function importanciaVacina(callback) {
  setTimeout(() => {
    alert(
      "Poliomielite (paralisia infantil) é uma doença contagiosa aguda causada por vírus que pode infectar crianças e adultos, por meio do contato direto com fezes ou com secreções eliminadas pela boca das pessoas doentes e, em casos graves, pode acarretar paralisia nos membros inferiores. A vacina contra Poliomielite é fundamental para prevenir a paralisia infantil e manter a erradicação dessa doença."
    );
    callback(); // Executa o callback após exibir a mensagem
  }, 2000); // Atraso de 2 segundos
}

function dataCampanha() {
  setTimeout(() => {
    alert(
      "A Campanha Nacional de Vacinação contra a Poliomielite será realizada de 27 de maio a 14 de junho de 2024. O Dia D de mobilização nacional acontecerá em 8 de junho de 2024. Procure a unidade de saúde mais próxima e garanta a proteção das crianças!"
    );
  }, 3000); // Atraso de 3 segundos
}

function idadeCriancas() {
  alert(
    "A vacina contra a Poliomielite é destinada a crianças menores de 5 anos de idade. Todas as crianças com idade entre 1 ano e menores de 5 anos devem ser vacinadas durante a campanha, independentemente de já terem recebido doses anteriores. Consulte a unidade de saúde para mais informações."
  );
}

function consultarUnidadeSaude() {
  const unidades = [
    {
      nome: "UBS Central",
      horario: "08:00 - 17:00",
      bairro: "São José",
      cidade: "Recife",
    },
    {
      nome: "UBS Jardim das Flores",
      horario: "07:30 - 16:30",
      bairro: "Jardim das Flores",
      cidade: "Recife",
    },
    {
      nome: "UBS Vila Esperança",
      horario: "09:00 - 18:00",
      bairro: "Vila Esperança",
      cidade: "Recife",
    },
  ];

  let mensagem = "Unidades Básicas de Saúde disponíveis:\n\n";
  unidades.forEach((unidade, index) => {
    mensagem += `${index + 1}. ${unidade.nome}\n   Horário: ${unidade.horario}\n   Bairro: ${unidade.bairro}\n   Cidade: ${unidade.cidade}\n\n`;
  });

  alert(mensagem);
}

// setInterval: Exibe lembretes automáticos
function lembreteAutomatico() {
  let contador = 0;
  const intervalo = setInterval(() => {
    contador++;
    alert(`Lembrete ${contador}: Não se esqueça de vacinar as crianças!`);
    if (contador === 3) {
      clearInterval(intervalo); // Para após 3 lembretes
      alert("Lembretes encerrados.");
    }
  }, 5000); // Intervalo de 5 segundos
}

// Inicia o menu
menuVacinas();
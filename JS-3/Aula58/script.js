/**
 * Aula 58 - Miniprojeto: Aplicativo de Agenda TimeMaster
 * Manipulação de datas e horas com métodos do objeto Date.
 */

// 1. Definição da classe Eventos
class Eventos {
  constructor() {
    // Lista onde cada item é um objeto com { id, titulo, data, local }
    this.listaEventos = [];
  }

  // 1) Adicionar um novo evento à agenda
  adicionarEvento(titulo, dataString, local) {
    const novoEvento = {
      id: Date.now(), // Gera um ID numérico único baseado no timestamp atual
      titulo: titulo,
      data: new Date(dataString), // Converte a string em objeto Date do JS
      local: local
    };

    this.listaEventos.push(novoEvento);
    return novoEvento;
  }

  // 2) Remover um evento da agenda pelo seu ID
  removerEvento(id) {
    const indice = this.listaEventos.findIndex((e) => e.id === id);
    if (indice !== -1) {
      const removido = this.listaEventos.splice(indice, 1)[0];
      return `Evento "${removido.titulo}" foi removido com sucesso.`;
    }
    return "Evento não encontrado.";
  }

  // 3) Retornar os eventos que já passaram (data anterior ao momento atual)
  obterEventosPassados() {
    const agora = new Date();
    // Compara o timestamp da data do evento com o momento atual
    return this.listaEventos.filter((e) => e.data.getTime() < agora.getTime());
  }

  // 4) Retornar os eventos do próximo mês
  obterEventosProximoMes() {
    const agora = new Date();
    // O próximo mês é o mês atual + 1 (ajustando a virada de ano se for dezembro)
    let proximoMes = agora.getMonth() + 1;
    let anoDoProximoMes = agora.getFullYear();

    if (proximoMes > 11) {
      proximoMes = 0; // Janeiro
      anoDoProximoMes++;
    }

    return this.listaEventos.filter((e) => {
      return (
        e.data.getMonth() === proximoMes &&
        e.data.getFullYear() === anoDoProximoMes
      );
    });
  }

  // Método auxiliar para listar todos os eventos
  listarTodos() {
    return this.listaEventos;
  }
}

// ====================================================
// 2. Instanciação e eventos de teste
// ====================================================

const agendaTimeMaster = new Eventos();

// Criamos alguns eventos para teste inicial
const hoje = new Date();
// Evento passado (10 dias atrás)
const dataPassada = new Date(hoje.getTime() - 10 * 24 * 60 * 60 * 1000);
agendaTimeMaster.adicionarEvento("Reunião de Abertura", dataPassada.toISOString(), "Sala 1");

// Evento futuro (no próximo mês)
const dataProximoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 15, 14, 0);
agendaTimeMaster.adicionarEvento("Workshop de Programação Web", dataProximoMes.toISOString(), "Laboratório 3");

// ====================================================
// 3. Integração com a interface HTML
// ====================================================

const inputTitulo = document.querySelector("#evento-titulo");
const inputData = document.querySelector("#evento-data");
const inputLocal = document.querySelector("#evento-local");
const listaEventosEl = document.querySelector("#lista-eventos");
const mensagemStatus = document.querySelector("#mensagem-status");

// Função para formatar a data e hora de forma legível
function formatarDataHora(objetoDate) {
  const diaMesAno = objetoDate.toLocaleDateString("pt-BR");
  const horaMinuto = objetoDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return `${diaMesAno} às ${horaMinuto} (Ano: ${objetoDate.getFullYear()})`;
}

// Função para renderizar os eventos na página
function renderizarEventos(listaParaExibir = agendaTimeMaster.listarTodos()) {
  listaEventosEl.innerHTML = "";

  if (listaParaExibir.length === 0) {
    listaEventosEl.innerHTML = "<li>Nenhum evento encontrado nesta seleção.</li>";
    return;
  }

  listaParaExibir.forEach((evento) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="info-evento">
        <strong>${evento.titulo}</strong>
        <small>📅 ${formatarDataHora(evento.data)}</small>
        <small>📍 Local: ${evento.local}</small>
      </div>
    `;

    const btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", () => {
      mensagemStatus.textContent = agendaTimeMaster.removerEvento(evento.id);
      renderizarEventos();
    });

    li.appendChild(btnRemover);
    listaEventosEl.appendChild(li);
  });
}

// Botão: Adicionar novo evento
document.querySelector("#btn-adicionar-evento").addEventListener("click", () => {
  const titulo = inputTitulo.value.trim();
  const data = inputData.value;
  const local = inputLocal.value.trim();

  if (!titulo || !data || !local) {
    mensagemStatus.textContent = "Preencha todos os campos do evento!";
    return;
  }

  agendaTimeMaster.adicionarEvento(titulo, data, local);
  mensagemStatus.textContent = `Evento "${titulo}" agendado com sucesso!`;

  inputTitulo.value = "";
  inputData.value = "";
  inputLocal.value = "";
  renderizarEventos();
});

// Botão: Mostrar todos
document.querySelector("#btn-todos").addEventListener("click", () => {
  mensagemStatus.textContent = "Exibindo todos os eventos da agenda.";
  renderizarEventos(agendaTimeMaster.listarTodos());
});

// Botão: Eventos que já passaram
document.querySelector("#btn-passados").addEventListener("click", () => {
  const passados = agendaTimeMaster.obterEventosPassados();
  mensagemStatus.textContent = `Exibindo ${passados.length} evento(s) que já passaram.`;
  renderizarEventos(passados);
});

// Botão: Eventos do próximo mês
document.querySelector("#btn-proximo-mes").addEventListener("click", () => {
  const proxMes = agendaTimeMaster.obterEventosProximoMes();
  mensagemStatus.textContent = `Exibindo ${proxMes.length} evento(s) agendados para o próximo mês.`;
  renderizarEventos(proxMes);
});

// Renderização inicial
renderizarEventos();

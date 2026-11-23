/**
 * Aula 57 - Miniprojeto: Cronômetro de Cozinha do Chef
 * Métodos de temporização: setInterval, clearInterval, setTimeout.
 */

// Variáveis para controlar o estado do cronômetro
let tempoRestante = 0; // Quantidade de segundos restantes
let idIntervalo = null; // Guarda o identificador retornado por setInterval
let estaPausado = false; // Flag para saber se está pausado

// Elementos da interface
const displayTempo = document.querySelector("#display-tempo");
const statusPrato = document.querySelector("#status-prato");
const inputSegundos = document.querySelector("#segundos-iniciais");
const btnIniciar = document.querySelector("#btn-iniciar");
const btnPausar = document.querySelector("#btn-pausar");
const btnFinalizar = document.querySelector("#btn-finalizar");

// Função para formatar segundos no padrão MM:SS
function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segRestantes = segundos % 60;
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segRestantes).padStart(2, "0");
  return `${mm}:${ss}`;
}

// 1. Iniciar o cronômetro com um valor específico
function iniciarCronometro() {
  // Limpamos qualquer intervalo que já estivesse rodando
  if (idIntervalo) {
    clearInterval(idIntervalo);
  }

  // Se não estava pausado, lê o valor do input
  if (!estaPausado) {
    tempoRestante = parseInt(inputSegundos.value, 10);
    if (isNaN(tempoRestante) || tempoRestante <= 0) {
      alert("Por favor, digite um tempo válido maior que 0 segundos.");
      return;
    }
  }

  estaPausado = false;
  btnPausar.textContent = "Pausar";
  btnPausar.disabled = false;
  btnFinalizar.disabled = false;
  btnIniciar.disabled = true;

  statusPrato.textContent = "O prato está no fogo! Contando tempo...";
  displayTempo.textContent = formatarTempo(tempoRestante);
  console.log(`[Chef] Cronômetro iniciado com ${tempoRestante} segundos.`);

  // Cria o intervalo de 1 em 1 segundo (1000 milissegundos)
  idIntervalo = setInterval(() => {
    tempoRestante--;

    // Atualiza a tela e o console
    displayTempo.textContent = formatarTempo(tempoRestante);
    console.log(`[Chef] Tempo restante: ${tempoRestante}s`);

    // Quando chega a zero, finaliza
    if (tempoRestante <= 0) {
      clearInterval(idIntervalo);
      idIntervalo = null;
      statusPrato.textContent = "🍽️ PRATO PRONTO! Retire do fogo agora!";
      btnIniciar.disabled = false;
      btnPausar.disabled = true;
      btnFinalizar.disabled = true;
      console.log("[Chef] Tempo esgotado! Prato finalizado.");
    }
  }, 1000);
}

// 2. Pausar e Continuar
function alternarPausa() {
  if (!idIntervalo && !estaPausado) return;

  if (!estaPausado) {
    // Pausa a contagem com clearInterval
    clearInterval(idIntervalo);
    idIntervalo = null;
    estaPausado = true;
    btnPausar.textContent = "Continuar";
    statusPrato.textContent = "Cronômetro PAUSADO.";
    console.log(`[Chef] Cronômetro pausado em ${tempoRestante}s.`);
  } else {
    // Continua a contagem de onde parou
    iniciarCronometro();
  }
}

// 3. Finalizar a qualquer momento
function finalizarCronometro() {
  if (idIntervalo) {
    clearInterval(idIntervalo);
    idIntervalo = null;
  }

  tempoRestante = 0;
  estaPausado = false;
  displayTempo.textContent = "00:00";
  statusPrato.textContent = "Preparo cancelado / resetado.";
  btnPausar.textContent = "Pausar";
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
  btnFinalizar.disabled = true;

  console.log("[Chef] Cronômetro finalizado e resetado.");
}

// Configuração dos ouvintes de eventos dos botões
btnIniciar.addEventListener("click", iniciarCronometro);
btnPausar.addEventListener("click", alternarPausa);
btnFinalizar.addEventListener("click", finalizarCronometro);

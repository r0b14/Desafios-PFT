// script.js para Aula28 - Carrossel com Eventos de Mouse e Teclado

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula28 pronta');

  // Selecionamos os elementos
  const botaoEsquerda = document.getElementById('botao-esquerda');
  const botaoDireita = document.getElementById('botao-direita');
  const banners = document.querySelectorAll('.noticias'); // Array-like com os 4 banners

  // Função para encontrar o índice do banner ativo
  function encontrarAtivo() {
    for (let i = 0; i < banners.length; i++) {
      if (banners[i].getAttribute('active') === 'true') {
        return i;
      }
    }
    return 0; // Fallback para o primeiro
  }

  // Função para ativar um banner específico
  function ativarBanner(indice) {
    // Remove active de todos
    banners.forEach(banner => {
      banner.setAttribute('active', 'false');
    });
    // Adiciona active ao selecionado
    banners[indice].setAttribute('active', 'true');

    // Atualiza o estado dos botões
    atualizarBotoes(indice);
  }

  // Função para atualizar o estado dos botões (habilitar/desabilitar)
  function atualizarBotoes(indiceAtivo) {
    // Botão esquerdo: desabilitado no primeiro banner (índice 0)
    if (indiceAtivo === 0) {
      botaoEsquerda.disabled = true;
      botaoEsquerda.style.opacity = '0.5';
      botaoEsquerda.style.cursor = 'not-allowed';
    } else {
      botaoEsquerda.disabled = false;
      botaoEsquerda.style.opacity = '1';
      botaoEsquerda.style.cursor = 'pointer';
    }

    // Botão direito: desabilitado no último banner (índice 3)
    if (indiceAtivo === banners.length - 1) {
      botaoDireita.disabled = true;
      botaoDireita.style.opacity = '0.5';
      botaoDireita.style.cursor = 'not-allowed';
    } else {
      botaoDireita.disabled = false;
      botaoDireita.style.opacity = '1';
      botaoDireita.style.cursor = 'pointer';
    }
  }

  // Função para navegar para o próximo banner
  function proximoBanner() {
    let ativo = encontrarAtivo();
    if (ativo < banners.length - 1) { // Só avança se não for o último
      ativo++;
      ativarBanner(ativo);
    }
  }

  // Função para navegar para o banner anterior
  function anteriorBanner() {
    let ativo = encontrarAtivo();
    if (ativo > 0) { // Só volta se não for o primeiro
      ativo--;
      ativarBanner(ativo);
    }
  }

  // Evento para o botão direito (próximo)
  botaoDireita.addEventListener('click', proximoBanner);

  // Evento para o botão esquerdo (anterior)
  botaoEsquerda.addEventListener('click', anteriorBanner);

  // Evento para teclas do teclado
  document.addEventListener('keydown', (event) => {
    // Tecla 'D' para próximo (direita)
    if (event.key.toLowerCase() === 'd') {
      event.preventDefault(); // Previne comportamento padrão
      proximoBanner();
    }
    // Tecla 'A' para anterior (esquerda)
    else if (event.key.toLowerCase() === 'a') {
      event.preventDefault(); // Previne comportamento padrão
      anteriorBanner();
    }
  });

  // Inicializa o estado dos botões
  atualizarBotoes(encontrarAtivo());
});
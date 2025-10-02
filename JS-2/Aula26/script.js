// script.js para Aula26 - Carrossel de Banners

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula26 pronta');
  
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
  }
  
  // Evento para o botão direito (próximo)
  botaoDireita.addEventListener('click', () => {
    let ativo = encontrarAtivo();
    ativo = (ativo + 1) % banners.length; // Próximo, ou volta ao primeiro se for o último
    ativarBanner(ativo);
  });
  
  // Evento para o botão esquerdo (anterior)
  botaoEsquerda.addEventListener('click', () => {
    let ativo = encontrarAtivo();
    ativo = (ativo - 1 + banners.length) % banners.length; // Anterior, ou vai ao último se for o primeiro
    ativarBanner(ativo);
  });
}); 
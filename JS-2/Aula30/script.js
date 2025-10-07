// script.js para Aula30 - Navegação e Manipulação da DOM

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula30 pronta');

  // Selecionamos o botão
  const botaoExecutar = document.getElementById('executar');

  // Função que executa a manipulação da DOM
  function executarManipulacao() {
    // 1. Navegar para o parágrafo com ID "first" e adicionar classe "highlight" ao seu elemento pai
    const paragrafoFirst = document.getElementById('first');
    if (paragrafoFirst) {
      // Navegamos para o pai usando parentElement
      const paiDoFirst = paragrafoFirst.parentElement;
      // Adicionamos a classe "highlight"
      paiDoFirst.classList.add('highlight');
      console.log('Classe "highlight" adicionada ao elemento pai de #first');
    }

    // 2. Criar uma nova div e inseri-la antes do primeiro filho do elemento com ID "innerContainer"
    const innerContainer = document.getElementById('innerContainer');
    if (innerContainer) {
      // Criamos a nova div
      const novaDiv = document.createElement('div');
      novaDiv.textContent = 'Uma nova div';
      novaDiv.classList.add('nova-div');

      // Navegamos para o primeiro filho usando firstElementChild
      const primeiroFilho = innerContainer.firstElementChild;

      // Inserimos a nova div antes do primeiro filho
      innerContainer.insertBefore(novaDiv, primeiroFilho);

      console.log('Nova div inserida antes do primeiro filho de #innerContainer');
    }

    // Desabilitamos o botão após execução para evitar múltiplas execuções
    botaoExecutar.disabled = true;
    botaoExecutar.textContent = 'Manipulação Executada';
    botaoExecutar.style.opacity = '0.6';
  }

  // Adicionamos evento de clique ao botão
  botaoExecutar.addEventListener('click', executarManipulacao);

  // Demonstração adicional de navegação na DOM (opcional)
  function demonstrarNavegacao() {
    console.log('=== Demonstração de Navegação na DOM ===');

    // Navegando do parágrafo #first para seus irmãos
    const first = document.getElementById('first');
    console.log('Parágrafo #first:', first);
    console.log('Próximo irmão:', first.nextElementSibling);
    console.log('Irmão anterior:', first.previousElementSibling);

    // Navegando do innerContainer para seus filhos
    const inner = document.getElementById('innerContainer');
    console.log('Container #innerContainer:', inner);
    console.log('Primeiro filho:', inner.firstElementChild);
    console.log('Último filho:', inner.lastElementChild);
    console.log('Todos os filhos:', inner.children);

    // Navegando para cima na hierarquia
    console.log('Pai do #innerContainer:', inner.parentElement);
    console.log('Avô do #innerContainer:', inner.parentElement?.parentElement);
  }

  // Executamos a demonstração no console
  demonstrarNavegacao();
});
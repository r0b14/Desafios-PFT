// script.js para Aula29 - localStorage e Eventos

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula29 pronta');

  // Selecionamos os elementos
  const formulario = document.getElementById('formulario');
  const nomeInput = document.getElementById('nome');
  const sobrenomeInput = document.getElementById('sobrenome');
  const nomeExibido = document.getElementById('nome-exibido');
  const sobrenomeExibido = document.getElementById('sobrenome-exibido');

  // Função para carregar dados do localStorage ao carregar a página
  function carregarDadosSalvos() {
    const nomeSalvo = localStorage.getItem('nome');
    const sobrenomeSalvo = localStorage.getItem('sobrenome');

    if (nomeSalvo) {
      nomeExibido.textContent = nomeSalvo;
      nomeInput.value = nomeSalvo; // Preenche o campo também
    }

    if (sobrenomeSalvo) {
      sobrenomeExibido.textContent = sobrenomeSalvo;
      sobrenomeInput.value = sobrenomeSalvo; // Preenche o campo também
    }
  }

  // Função para salvar dados no localStorage
  function salvarDados(nome, sobrenome) {
    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);

    // Atualiza a exibição na página
    nomeExibido.textContent = nome;
    sobrenomeExibido.textContent = sobrenome;

    // Mostra alerta de confirmação
    alert('Informações salvas com sucesso!');

    // Dispara um evento customizado para monitoramento
    const eventoSalvamento = new CustomEvent('dadosSalvos', {
      detail: { nome: nome, sobrenome: sobrenome }
    });
    document.dispatchEvent(eventoSalvamento);
  }

  // Evento de submit do formulário
  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o reload da página

    const nome = nomeInput.value.trim();
    const sobrenome = sobrenomeInput.value.trim();

    if (nome && sobrenome) {
      salvarDados(nome, sobrenome);
    } else {
      alert('Por favor, preencha tanto o nome quanto o sobrenome.');
    }
  });

  // Evento customizado para monitoramento de salvamento
  document.addEventListener('dadosSalvos', (event) => {
    console.log('Dados salvos no localStorage:', event.detail);
    // Aqui você poderia adicionar mais lógica, como analytics, etc.
  });

  // Carrega dados salvos ao carregar a página
  carregarDadosSalvos();

  // Monitoramento adicional: detecta mudanças no localStorage (útil para múltiplas abas)
  window.addEventListener('storage', (event) => {
    if (event.key === 'nome' || event.key === 'sobrenome') {
      console.log('localStorage alterado em outra aba/janela');
      carregarDadosSalvos(); // Recarrega os dados
    }
  });
});
// script.js para Aula25
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula25 pronta');
  
  // Selecionamos os elementos
  const formulario = document.getElementById('formulario');
  const botaoTopo = document.getElementById('adicionarTopo');
  const tbody = document.querySelector('#tabela tbody');
  
  // Função para criar uma nova linha da tabela
  function criarLinha(nome, email) {
    const linha = document.createElement('tr');
    
    // Célula do nome
    const celulaNome = document.createElement('td');
    celulaNome.textContent = nome;
    
    // Célula do email
    const celulaEmail = document.createElement('td');
    celulaEmail.textContent = email;
    
    // Célula das ações
    const celulaAcoes = document.createElement('td');
    celulaAcoes.classList.add('acoes');
    
    // Botão remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('remover');
    botaoRemover.addEventListener('click', () => linha.remove());
    
    // Botão adicionar acima
    const botaoAcima = document.createElement('button');
    botaoAcima.textContent = 'Acima';
    botaoAcima.classList.add('acima');
    botaoAcima.addEventListener('click', () => adicionarAcima(linha));
    
    // Botão adicionar abaixo
    const botaoAbaixo = document.createElement('button');
    botaoAbaixo.textContent = 'Abaixo';
    botaoAbaixo.classList.add('abaixo');
    botaoAbaixo.addEventListener('click', () => adicionarAbaixo(linha));
    
    // Adicionamos os botões à célula de ações
    celulaAcoes.appendChild(botaoRemover);
    celulaAcoes.appendChild(botaoAcima);
    celulaAcoes.appendChild(botaoAbaixo);
    
    // Montamos a linha
    linha.appendChild(celulaNome);
    linha.appendChild(celulaEmail);
    linha.appendChild(celulaAcoes);
    
    return linha;
  }
  
  // Função para adicionar no final
  function adicionarNoFinal(nome, email) {
    const linha = criarLinha(nome, email);
    tbody.appendChild(linha);
  }
  
  // Função para adicionar no topo
  function adicionarNoTopo(nome, email) {
    const linha = criarLinha(nome, email);
    tbody.insertBefore(linha, tbody.firstChild);
  }
  
  // Função para adicionar acima de uma linha específica
  function adicionarAcima(linhaReferencia) {
    const nome = prompt('Nome:');
    const email = prompt('Email:');
    if (nome && email) {
      const linha = criarLinha(nome, email);
      linhaReferencia.before(linha);
    }
  }
  
  // Função para adicionar abaixo de uma linha específica
  function adicionarAbaixo(linhaReferencia) {
    const nome = prompt('Nome:');
    const email = prompt('Email:');
    if (nome && email) {
      const linha = criarLinha(nome, email);
      linhaReferencia.after(linha);
    }
  }
  
  // Evento para o formulário (adicionar no final)
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (nome && email) {
      adicionarNoFinal(nome, email);
      formulario.reset();
    }
  });
  
  // Evento para o botão adicionar no topo
  botaoTopo.addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    if (nome && email) {
      adicionarNoTopo(nome, email);
      formulario.reset();
    }
  });
});

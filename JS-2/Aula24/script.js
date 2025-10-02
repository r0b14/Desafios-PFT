// script.js para Aula24
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aula24 pronta');
  
  // Selecionamos os elementos
  const botaoAdicionar = document.getElementById('adicionar');
  const containerNoticias = document.getElementById('noticias');
  
  // Contador para títulos únicos
  let contadorNoticias = 1;
  
  // Função para adicionar notícia
  function adicionarNoticia() {
    // Criamos a div da notícia
    const noticia = document.createElement('div');
    noticia.classList.add('noticia');
    
    // Criamos o título
    const titulo = document.createElement('h3');
    titulo.textContent = `Notícia ${contadorNoticias}`;
    
    // Criamos o conteúdo
    const conteudo = document.createElement('p');
    conteudo.textContent = `Esta é a notícia número ${contadorNoticias}. Conteúdo fictício para demonstração.`;
    
    // Criamos o botão remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('remover');
    
    // Adicionamos evento ao botão remover
    botaoRemover.addEventListener('click', () => removerNoticia(noticia));
    
    // Montamos a notícia
    noticia.appendChild(titulo);
    noticia.appendChild(conteudo);
    noticia.appendChild(botaoRemover);
    
    // Adicionamos ao container
    containerNoticias.appendChild(noticia);
    
    // Incrementamos o contador
    contadorNoticias++;
  }
  
  // Função para remover notícia com confirmação
  function removerNoticia(noticia) {
    const confirmar = confirm('Tem certeza que deseja remover esta notícia?');
    if (confirmar) {
      containerNoticias.removeChild(noticia);
    }
  }
  
  // Adicionamos evento ao botão adicionar
  botaoAdicionar.addEventListener('click', adicionarNoticia);
});

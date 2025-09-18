// script.js para Aula18
document.addEventListener('DOMContentLoaded', () => {
  const left = document.getElementById('botao-esquerda');
  const right = document.getElementById('botao-direita');
  const noticias = Array.from(document.querySelectorAll('.noticias'));
  let idx = noticias.findIndex(n => n.getAttribute('active') === 'true');
  if(idx < 0) idx = 0;

  function show(i){
    noticias.forEach((n, j)=> n.style.display = j===i ? 'block' : 'none');
  }
  show(idx);

  left && left.addEventListener('click', ()=>{ idx = (idx-1+noticias.length)%noticias.length; show(idx);});
  right && right.addEventListener('click', ()=>{ idx = (idx+1)%noticias.length; show(idx);});
});

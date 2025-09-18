// script.js para Aula20
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  input && input.addEventListener('input', e => console.log('Aula20 input:', e.target.value));
});

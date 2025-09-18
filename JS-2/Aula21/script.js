
function verificarValorInput(){
  const input = document.getElementById('input-text');
  if(!input) return;
  // usar a função comum para manter comportamento consistente
  atualizarValorInput(input.value);
  // manter comportamento anterior: resetar o input
  input.value = "Valor resetado";
}

function alterarImagem(){
  const imagem = document.querySelector('#container img');
  imagem.src = "https://www.pe.gov.br/assets/img/logo/logo-pe.png"
 }

// Atualiza o conteúdo visível em #valor-input e aplica/ remove a classe .empty
function atualizarValorInput(){
  // aceitar um valor externo opcional
  const input = document.getElementById('input-text');
  const valorInput = document.getElementById('valor-input');
  if(!valorInput) return;
  let val = '';
  if(arguments.length > 0){
    val = (arguments[0] || '').toString().trim();
  } else if(input){
    val = (input.value || '').toString().trim();
  }
  if(!val){
    // vazio: limpa conteúdo e marca como empty
    valorInput.textContent = '';
    valorInput.classList.add('empty');
  } else {
    valorInput.textContent = val;
    valorInput.classList.remove('empty');
  }
}

// ligar o listener no carregamento
document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('input-text');
  if(input){
    // atualizar ao digitar
    input.addEventListener('input', atualizarValorInput);
    // executar na carga para refletir valor inicial
    atualizarValorInput();
  }
});
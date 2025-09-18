function verificarValorInput() {
  const input = document.getElementById("input-text");
  const valorInput = document.getElementById("valor-input");
  // atualiza o texto do elemento
  valorInput.textContent = input.value;

  // se houver qualquer texto, adiciona a classe 'temostexto', caso contrário remove
  if (valorInput.textContent && valorInput.textContent.trim() !== "") {
    valorInput.classList.add('temostexto');
  } else {
    valorInput.classList.remove('temostexto');
  }

  // se o texto for exatamente 'Texto original', adiciona a classe 'active', caso contrário remove
  if (valorInput.textContent === 'Texto original') {
    valorInput.classList.add('active');
  } else {
    valorInput.classList.remove('active');
  }

  // reseta o valor do input para o comportamento original
  input.value = "Valor resetado";
}

function alterarImagem() {
  const imagem = document.querySelector("#container img");
  imagem.src = "https://www.pe.gov.br/wp-content/uploads/2023/08/GovPERGB.png";
}

// Expor funções no escopo global para ambientes como jsdom/tests
if (typeof window !== 'undefined') {
  window.verificarValorInput = verificarValorInput;
  window.alterarImagem = alterarImagem;
}

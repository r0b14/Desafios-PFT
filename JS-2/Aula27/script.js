document.getElementById('loginForm').addEventListener('submit', function(event) {
  // Capturamos os valores dos campos de senha
  const senha = document.getElementById('password').value;
  const confirmacao = document.getElementById('confirm-password').value;
  
  // Verificamos se as senhas são iguais
  if (senha !== confirmacao) {
    // Se não forem iguais, impedimos o envio do formulário
    event.preventDefault();
    // Mostramos um alerta para o usuário
    alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
  } else {
    // Se forem iguais, o formulário será enviado normalmente
    alert('Formulário enviado com sucesso!');
  }
});
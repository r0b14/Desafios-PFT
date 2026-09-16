const codigo = document.querySelector('#codigo');
const log = document.querySelector('#log');

document.querySelector('#transferir').addEventListener('click', () => {
  const etapas = [];
  try {
    etapas.push('Conexão segura aberta.');
    if (codigo.value !== '1234') throw new Error('Código de confirmação incorreto.');
    etapas.push('Transferência simulada com sucesso.');
  } catch (erro) {
    etapas.push(`Operação cancelada: ${erro.message}`);
  } finally {
    // Esta etapa sempre acontece, com erro ou sem erro.
    codigo.value = '';
    etapas.push('Conexão segura fechada e campo limpo.');
    log.textContent = etapas.join('\n');
  }
});

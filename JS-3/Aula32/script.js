const relatorio = document.querySelector('#relatorio');
const casos = {
  referencia: () => usuarioInexistente.nome,
  json: () => JSON.parse('{ "nome": }'),
  array: () => { const tarefas = ['estudar']; if (!tarefas[3]) throw new RangeError('Não há tarefa na posição 3.'); }
};
document.querySelectorAll('[data-caso]').forEach((botao) => {
  botao.addEventListener('click', () => {
    try {
      casos[botao.dataset.caso]();
      relatorio.innerHTML = '<h2>Relatório</h2><p>O código foi executado.</p>';
    } catch (erro) {
      relatorio.innerHTML = `<h2>Erro encontrado: ${erro.name}</h2><p><strong>Mensagem:</strong> ${erro.message}</p><p><strong>Solução:</strong> confira se o dado existe e valide-o antes de utilizá-lo.</p>`;
    }
  });
});

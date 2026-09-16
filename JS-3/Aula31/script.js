const seletorErro = document.querySelector('#erro');
const resultado = document.querySelector('#resultado');

document.querySelector('#executar').addEventListener('click', () => {
  try {
    let mensagem;
    if (seletorErro.value === 'json') mensagem = JSON.parse('{nome: "Ana"}').nome;
    if (seletorErro.value === 'indice') {
      const cores = ['azul', 'verde'];
      if (cores[5] === undefined) throw new RangeError('A posição 5 não existe no array.');
      mensagem = cores[5];
    }
    if (seletorErro.value === 'tipo') {
      const idade = 'dezoito';
      if (typeof idade !== 'number') throw new TypeError('A idade deve ser um número.');
      mensagem = idade;
    }
    resultado.textContent = `Sucesso: ${mensagem}`;
  } catch (erro) {
    resultado.textContent = `Erro tratado!\nTipo: ${erro.name}\nMensagem: ${erro.message}`;
  }
});

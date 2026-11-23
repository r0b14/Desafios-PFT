/**
 * Aula 51 - Miniprojeto: Gerenciador de Tarefas de Natal da Prefeitura do Recife
 * Foco didático para Ensino Médio: métodos de array e manipulação manual.
 */

// 1. Definição da Classe para gerenciar a lista de tarefas
class ListaTarefasNatal {
  // Construtor: inicializa o nome do setor e uma lista (array) vazia
  constructor(polo) {
    this.polo = polo; // Ex: "Marco Zero" ou "Boa Viagem"
    this.tarefas = []; // Array que guardará os textos das tarefas
  }

  // Método para adicionar uma nova tarefa ao FINAL da lista usando push()
  adicionarNoFinal(tarefa) {
    this.tarefas.push(tarefa);
  }

  // Método para adicionar uma nova tarefa no INÍCIO da lista usando unshift()
  adicionarNoInicio(tarefa) {
    this.tarefas.unshift(tarefa);
  }

  // Método para remover a tarefa do INÍCIO da lista usando shift()
  removerDoInicio() {
    if (this.tarefas.length === 0) {
      return null; // Lista vazia, não há o que remover
    }
    return this.tarefas.shift();
  }

  // Método para remover do FINAL de forma MANUAL (sem usar pop)
  // Atendendo ao requisito: "Use manipulação manual de arrays em pelo menos um dos métodos."
  removerDoFinalManual() {
    if (this.tarefas.length === 0) {
      return null;
    }

    // Guardamos o último item para poder avisar qual foi removido
    const ultimoIndice = this.tarefas.length - 1;
    const itemRemovido = this.tarefas[ultimoIndice];

    // Criamos um novo array manual com todos os itens, exceto o último
    const novoArray = [];
    for (let i = 0; i < ultimoIndice; i++) {
      novoArray[i] = this.tarefas[i];
    }

    // Substituímos o array original pelo novo array sem o último elemento
    this.tarefas = novoArray;

    return itemRemovido;
  }

  // Método para visualizar a lista atual de tarefas
  listarTarefas() {
    return this.tarefas;
  }
}

// ==========================================
// 2. Criação e teste de instâncias diferentes
// ==========================================

// Instância 1: Polo Marco Zero (usada na interface)
const poloMarcoZero = new ListaTarefasNatal("Marco Zero");
poloMarcoZero.adicionarNoFinal("Montar palco dos shows");
poloMarcoZero.adicionarNoFinal("Testar iluminação dos postes históricos");

// Instância 2: Polo Boa Viagem (demonstração no console)
const poloBoaViagem = new ListaTarefasNatal("Boa Viagem");
poloBoaViagem.adicionarNoInicio("Instalar presépio na praia");
poloBoaViagem.adicionarNoFinal("Distribuir refletores verdes e vermelhos");

console.log("--- Teste da Instância 2 (Boa Viagem) ---");
console.log("Tarefas iniciais:", poloBoaViagem.listarTarefas());
console.log("Removido manual do fim:", poloBoaViagem.removerDoFinalManual());
console.log("Tarefas após remoção manual:", poloBoaViagem.listarTarefas());

// ==========================================
// 3. Integração com a página HTML
// ==========================================

const inputTarefa = document.querySelector("#input-tarefa");
const listaElemento = document.querySelector("#lista-tarefas");
const mensagemStatus = document.querySelector("#mensagem-status");

// Função que atualiza a lista de tarefas exibida na página
function atualizarTela() {
  listaElemento.innerHTML = "";
  const listaAtual = poloMarcoZero.listarTarefas();

  if (listaAtual.length === 0) {
    listaElemento.innerHTML = "<li>Nenhuma tarefa cadastrada no momento.</li>";
    return;
  }

  // Percorremos o array e criamos um <li> para cada tarefa
  listaAtual.forEach((tarefa) => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    listaElemento.appendChild(item);
  });
}

// Botão: Adicionar no Início (unshift)
document.querySelector("#btn-add-inicio").addEventListener("click", () => {
  const texto = inputTarefa.value.trim();
  if (texto === "") {
    mensagemStatus.textContent = "Digite uma tarefa para adicionar no início!";
    return;
  }

  poloMarcoZero.adicionarNoInicio(texto);
  mensagemStatus.textContent = `Tarefa adicionada no início: "${texto}"`;
  inputTarefa.value = "";
  atualizarTela();
});

// Botão: Adicionar no Fim (push)
document.querySelector("#btn-add-fim").addEventListener("click", () => {
  const texto = inputTarefa.value.trim();
  if (texto === "") {
    mensagemStatus.textContent = "Digite uma tarefa para adicionar no fim!";
    return;
  }

  poloMarcoZero.adicionarNoFinal(texto);
  mensagemStatus.textContent = `Tarefa adicionada no fim: "${texto}"`;
  inputTarefa.value = "";
  atualizarTela();
});

// Botão: Remover do Início (shift)
document.querySelector("#btn-rem-inicio").addEventListener("click", () => {
  const removida = poloMarcoZero.removerDoInicio();
  if (removida) {
    mensagemStatus.textContent = `Removida do início: "${removida}"`;
  } else {
    mensagemStatus.textContent = "A lista já está vazia!";
  }
  atualizarTela();
});

// Botão: Remover do Fim (Manual)
document.querySelector("#btn-rem-fim-manual").addEventListener("click", () => {
  const removida = poloMarcoZero.removerDoFinalManual();
  if (removida) {
    mensagemStatus.textContent = `Removida manualmente do fim: "${removida}"`;
  } else {
    mensagemStatus.textContent = "A lista já está vazia!";
  }
  atualizarTela();
});

// Exibe a lista inicial ao carregar a página
atualizarTela();

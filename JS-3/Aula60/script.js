/**
 * Aula 60 - Projeto Integrador: CRUD com localStorage e Manipulação do DOM
 * Foco didático para Ensino Médio: Criação, Leitura, Atualização e Deleção (CRUD) de dados persistentes.
 */

// Chave utilizada para salvar os dados no navegador do usuário
const CHAVE_STORAGE = "desafios_pft_crud_metas";

// Variável que guarda qual filtro de exibição está selecionado ("todos", "pendentes" ou "concluidas")
let filtroAtual = "todos";

// 1. Função READ (Ler): recupera a lista de metas gravada no localStorage
function obterMetas() {
  const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
  // Se existirem dados salvos, convertemos de texto JSON para array; caso contrário, iniciamos array vazio []
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

// 2. Função auxiliar para salvar o array atualizado de volta no localStorage
function salvarMetas(listaMetas) {
  // Converte o array de objetos em texto no formato JSON
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(listaMetas));
}

// 3. Função CREATE (Criar): adiciona uma nova meta ao array e persiste
function adicionarMeta(titulo) {
  const metas = obterMetas();

  // Criamos o objeto que representa a meta
  const novaMeta = {
    id: Date.now(), // Gera um ID único com base no milissegundo atual
    titulo: titulo, // Descrição da tarefa
    concluida: false // Toda meta inicia como pendente (false)
  };

  metas.push(novaMeta); // Insere no fim da lista
  salvarMetas(metas); // Salva no localStorage
  renderizarTela(); // Atualiza a página
}

// 4. Função UPDATE (Atualizar): alterna o status de concluído de uma meta específica
function alternarStatusMeta(id) {
  const metas = obterMetas().map((meta) => {
    if (meta.id === id) {
      // Inverte o valor booleano de concluida (true vira false, e vice-versa)
      return { ...meta, concluida: !meta.concluida };
    }
    return meta;
  });

  salvarMetas(metas);
  renderizarTela();
}

// 5. Função DELETE (Excluir): remove uma meta pelo seu ID
function removerMeta(id) {
  // filter mantém todas as metas cujo ID seja diferente do informado
  const metasAtualizadas = obterMetas().filter((meta) => meta.id !== id);
  salvarMetas(metasAtualizadas);
  renderizarTela();
}

// 6. Função para limpar todas as metas concluídas de uma vez só
function limparConcluidas() {
  // Mantém apenas as que NÃO foram concluídas
  const metasPendentes = obterMetas().filter((meta) => !meta.concluida);
  salvarMetas(metasPendentes);
  renderizarTela();
}

// 7. Função de renderização: atualiza os elementos visuais na página HTML
function renderizarTela() {
  const metas = obterMetas();
  const listaElemento = document.querySelector("#lista-metas");
  listaElemento.innerHTML = "";

  // Filtra as metas de acordo com o botão clicado pelo usuário
  const metasFiltradas = metas.filter((m) => {
    if (filtroAtual === "pendentes") return !m.concluida;
    if (filtroAtual === "concluidas") return m.concluida;
    return true; // Se for "todos", exibe todas
  });

  // Caso não haja itens na lista para exibir
  if (metasFiltradas.length === 0) {
    listaElemento.innerHTML =
      "<li style='color: #64748b;'>Nenhuma meta cadastrada nesta visualização.</li>";
  } else {
    // Cria os elementos do DOM para cada meta
    metasFiltradas.forEach((meta) => {
      const li = document.createElement("li");
      if (meta.concluida) li.classList.add("concluida");

      // Caixa de marcação (checkbox)
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.width = "auto";
      checkbox.style.margin = "0";
      checkbox.checked = meta.concluida;
      checkbox.addEventListener("change", () => alternarStatusMeta(meta.id));

      // Texto da meta
      const spanTexto = document.createElement("span");
      spanTexto.className = "texto";
      spanTexto.textContent = meta.titulo;
      spanTexto.addEventListener("click", () => alternarStatusMeta(meta.id));

      // Botão de exclusão
      const btnRemover = document.createElement("button");
      btnRemover.className = "btn-remover";
      btnRemover.textContent = "Excluir";
      btnRemover.addEventListener("click", () => removerMeta(meta.id));

      li.appendChild(checkbox);
      li.appendChild(spanTexto);
      li.appendChild(btnRemover);
      listaElemento.appendChild(li);
    });
  }

  // Atualiza os contadores no rodapé
  const totalConcluidas = metas.filter((m) => m.concluida).length;
  document.querySelector("#contador-metas").textContent =
    `Total: ${metas.length} | Concluídas: ${totalConcluidas}`;
}

// ====================================================
// Ouvintes de Eventos da Interface
// ====================================================

// Envio do formulário de nova meta
document.querySelector("#form-meta").addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que a página recarregue ao submeter o formulário
  const input = document.querySelector("#input-meta");
  const titulo = input.value.trim();

  if (!titulo) return;

  adicionarMeta(titulo);
  input.value = ""; // Limpa o campo após adicionar
});

// Botões de filtro (Todas, Pendentes, Concluídas)
document.querySelectorAll(".filtro-btn").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.querySelectorAll(".filtro-btn").forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    filtroAtual = botao.dataset.filtro;
    renderizarTela();
  });
});

// Botão para limpar todas as tarefas concluídas
document.querySelector("#btn-limpar-todas").addEventListener("click", limparConcluidas);

// Exibição inicial ao carregar o script
renderizarTela();

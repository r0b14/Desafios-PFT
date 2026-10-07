const campoBusca = document.querySelector("#busca");
const botaoBuscar = document.querySelector("#buscar");
const mensagem = document.querySelector("#mensagem");
const cartao = document.querySelector("#pokemon");
const imagem = document.querySelector("#imagem");
const nome = document.querySelector("#nome");
const tipo = document.querySelector("#tipo");

async function buscarPokemon() {
  const termo = campoBusca.value.trim().toLowerCase();
  if (!termo) return;

  mensagem.textContent = "Buscando...";
  cartao.hidden = true;

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${termo}`);
    if (!resposta.ok) throw new Error("Pokémon não encontrado.");

    const pokemon = await resposta.json();
    imagem.src = pokemon.sprites.front_default;
    nome.textContent = pokemon.name;
    tipo.textContent = `Tipo: ${pokemon.types[0].type.name}`;
    cartao.hidden = false;
    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

botaoBuscar.addEventListener("click", buscarPokemon);

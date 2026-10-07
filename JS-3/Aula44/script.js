const botaoCarregar = document.querySelector("#carregar");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista");

async function carregarPokemon() {
  mensagem.textContent = "Carregando...";
  lista.innerHTML = "";

  try {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
    if (!resposta.ok) throw new Error("Não foi possível carregar a lista.");

    const dados = await resposta.json();
    dados.results.forEach((pokemon) => {
      lista.innerHTML += `<li>${pokemon.name}</li>`;
    });
    mensagem.textContent = "Lista carregada!";
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
}

botaoCarregar.addEventListener("click", carregarPokemon);

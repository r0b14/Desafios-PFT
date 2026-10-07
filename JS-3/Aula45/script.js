const formulario = document.querySelector("#formulario");
const urlGerada = document.querySelector("#url-gerada");
const mensagem = document.querySelector("#mensagem");
const listaPosts = document.querySelector("#posts");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const dadosFormulario = new FormData(formulario);
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.set("userId", dadosFormulario.get("userId"));
  url.searchParams.set("_limit", "3");

  urlGerada.textContent = `URL: ${url}`;
  mensagem.textContent = `Título informado: ${dadosFormulario.get("title")}`;
  listaPosts.innerHTML = "";

  try {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Não foi possível buscar os posts.");
    const posts = await resposta.json();
    posts.forEach((post) => {
      listaPosts.innerHTML += `<li>${post.title}</li>`;
    });
  } catch (erro) {
    mensagem.textContent = erro.message;
  }
});

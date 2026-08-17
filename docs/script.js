const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector(".menu-principal");
const filtros = document.querySelectorAll("[data-filtro]");
const atalhosFiltro = document.querySelectorAll("[data-atalho-filtro]");
const projetos = document.querySelectorAll("[data-categoria]");
const resultadoFiltro = document.querySelector(".resultado-filtro");
const botaoTopo = document.querySelector(".voltar-topo");
const anoAtual = document.querySelector("#ano-atual");

function fecharMenu() {
    if (!botaoMenu || !menuPrincipal) return;

    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.querySelector(".sr-only").textContent = "Abrir menu";
    menuPrincipal.classList.remove("aberto");
    document.body.classList.remove("menu-aberto");
}

function alternarMenu() {
    const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";

    botaoMenu.setAttribute("aria-expanded", String(!estaAberto));
    botaoMenu.querySelector(".sr-only").textContent = estaAberto ? "Abrir menu" : "Fechar menu";
    menuPrincipal.classList.toggle("aberto", !estaAberto);
    document.body.classList.toggle("menu-aberto", !estaAberto);
}

function aplicarFiltro(categoria) {
    let quantidadeVisivel = 0;

    projetos.forEach((projeto) => {
        const deveExibir = categoria === "todos" || projeto.dataset.categoria === categoria;
        projeto.classList.toggle("oculto", !deveExibir);
        projeto.setAttribute("aria-hidden", String(!deveExibir));

        if (deveExibir) quantidadeVisivel += 1;
    });

    filtros.forEach((filtro) => {
        const estaAtivo = filtro.dataset.filtro === categoria;
        filtro.classList.toggle("ativo", estaAtivo);
        filtro.setAttribute("aria-pressed", String(estaAtivo));
    });

    const palavraProjeto = quantidadeVisivel === 1 ? "projeto exibido" : "projetos exibidos";
    resultadoFiltro.innerHTML = `<strong>${quantidadeVisivel}</strong> ${palavraProjeto}`;
}

botaoMenu?.addEventListener("click", alternarMenu);

menuPrincipal?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => aplicarFiltro(filtro.dataset.filtro));
});

atalhosFiltro.forEach((atalho) => {
    atalho.addEventListener("click", () => aplicarFiltro(atalho.dataset.atalhoFiltro));
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 820) fecharMenu();
});

window.addEventListener("scroll", () => {
    botaoTopo?.classList.toggle("visivel", window.scrollY > 700);
}, { passive: true });

botaoTopo?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

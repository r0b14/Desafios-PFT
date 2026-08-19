// ============================================================
// 1. SELECIONANDO OS ELEMENTOS DO HTML
// ============================================================
const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector(".menu");
const botaoDropdown = document.querySelector(".botao-dropdown");
const submenu = document.querySelector(".submenu");

// Uma função evita repetir as mesmas instruções em vários lugares.
function fecharDropdown() {
    submenu.classList.remove("aberto");
    botaoDropdown.setAttribute("aria-expanded", "false");
}

function fecharMenu() {
    menuPrincipal.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    fecharDropdown();
}

// ============================================================
// 2. ABRINDO E FECHANDO O MENU EM TELAS PEQUENAS
// ============================================================
botaoMenu.addEventListener("click", function () {
    const menuEstaAberto = menuPrincipal.classList.toggle("aberto");

    // aria-expanded informa o estado do menu aos leitores de tela.
    botaoMenu.setAttribute("aria-expanded", String(menuEstaAberto));
    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto ? "Fechar menu" : "Abrir menu"
    );
});

// ============================================================
// 3. ABRINDO E FECHANDO O DROPDOWN DE GÊNEROS
// ============================================================
botaoDropdown.addEventListener("click", function () {
    const dropdownEstaAberto = submenu.classList.toggle("aberto");
    botaoDropdown.setAttribute("aria-expanded", String(dropdownEstaAberto));
});

// Fecha os menus depois que o usuário escolhe um link.
menuPrincipal.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

// Fecha o dropdown quando há um clique fora dele.
document.addEventListener("click", function (evento) {
    const clicouNoDropdown = evento.target.closest(".item-dropdown");

    if (!clicouNoDropdown) {
        fecharDropdown();
    }
});

// A tecla Esc é uma maneira conhecida e acessível de fechar menus.
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharMenu();
        botaoMenu.focus();
    }
});

// Se a tela crescer, retiramos classes usadas apenas no menu mobile.
window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
        fecharMenu();
    }
});

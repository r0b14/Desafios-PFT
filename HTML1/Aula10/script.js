// Selecionamos os elementos uma única vez e guardamos cada referência.
const formulario = document.querySelector("#formulario-deposito");
const campoValor = document.querySelector("#valor");
const saldoNaTela = document.querySelector("#saldo");
const areaSaldo = document.querySelector("#area-saldo");
const mensagemHover = document.querySelector("#mensagem-hover");
const mensagemOperacao = document.querySelector("#mensagem-operacao");

// Esta variável guarda o saldo como número para permitir novos cálculos.
let saldo = 0;

// Intl.NumberFormat transforma 50.5 em "50,50", seguindo o padrão brasileiro.
const formatadorDeMoeda = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

formulario.addEventListener("submit", function (event) {
    // Impede que o navegador recarregue a página ao enviar o formulário.
    event.preventDefault();

    // valueAsNumber já converte o conteúdo do input para o tipo number.
    const valorDoDeposito = campoValor.valueAsNumber;

    if (Number.isNaN(valorDoDeposito) || valorDoDeposito < 1) {
        mensagemOperacao.textContent = "Digite um valor válido a partir de R$ 1,00.";
        return;
    }

    saldo = saldo + valorDoDeposito;
    saldoNaTela.textContent = formatadorDeMoeda.format(saldo);
    mensagemOperacao.textContent = `Depósito de R$ ${formatadorDeMoeda.format(valorDoDeposito)} realizado!`;

    formulario.reset();
    campoValor.focus();
});

function mostrarMensagemDoSaldo() {
    mensagemHover.textContent = "Saldo disponível";
}

function esconderMensagemDoSaldo() {
    mensagemHover.textContent = "";
}

// Eventos de hover pedidos no desafio.
areaSaldo.addEventListener("mouseenter", mostrarMensagemDoSaldo);
areaSaldo.addEventListener("mouseleave", esconderMensagemDoSaldo);

// Os eventos de foco tornam a mesma informação acessível pelo teclado.
areaSaldo.addEventListener("focus", mostrarMensagemDoSaldo);
areaSaldo.addEventListener("blur", esconderMensagemDoSaldo);

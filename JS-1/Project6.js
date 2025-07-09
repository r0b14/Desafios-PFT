// Lanchonete Comunitária
console.log("=== LANCHONETE COMUNITÁRIA ===");
console.log("Menu:");
console.log("1 - Sanduíche - R$5,00");
console.log("2 - Suco Natural - R$3,50");
console.log("3 - Salada de Frutas - R$4,00");
console.log("");

// Simulando um pedido (mude os valores para testar)
let item1 = 1; // Primeiro item escolhido
let item2 = 2; // Segundo item escolhido
let item3 = 0; // Terceiro item (0 = não escolheu nada)

let total = 0;
let pedido = "";

console.log("=== PROCESSANDO PEDIDO ===");

// Primeiro item
if (item1 == 1) {
    console.log("Item 1: Sanduíche - R$5,00");
    total = total + 5.00;
    pedido = pedido + "Sanduíche";
} else if (item1 == 2) {
    console.log("Item 1: Suco Natural - R$3,50");
    total = total + 3.50;
    pedido = pedido + "Suco Natural";
} else if (item1 == 3) {
    console.log("Item 1: Salada de Frutas - R$4,00");
    total = total + 4.00;
    pedido = pedido + "Salada de Frutas";
} else {
    console.log("Item 1: Nenhum item escolhido");
}

// Segundo item
if (item2 == 1) {
    console.log("Item 2: Sanduíche - R$5,00");
    total = total + 5.00;
    if (pedido != "") {
        pedido = pedido + ", Sanduíche";
    } else {
        pedido = pedido + "Sanduíche";
    }
} else if (item2 == 2) {
    console.log("Item 2: Suco Natural - R$3,50");
    total = total + 3.50;
    if (pedido != "") {
        pedido = pedido + ", Suco Natural";
    } else {
        pedido = pedido + "Suco Natural";
    }
} else if (item2 == 3) {
    console.log("Item 2: Salada de Frutas - R$4,00");
    total = total + 4.00;
    if (pedido != "") {
        pedido = pedido + ", Salada de Frutas";
    } else {
        pedido = pedido + "Salada de Frutas";
    }
} else {
    console.log("Item 2: Nenhum item escolhido");
}

// Terceiro item
if (item3 == 1) {
    console.log("Item 3: Sanduíche - R$5,00");
    total = total + 5.00;
    if (pedido != "") {
        pedido = pedido + ", Sanduíche";
    } else {
        pedido = pedido + "Sanduíche";
    }
} else if (item3 == 2) {
    console.log("Item 3: Suco Natural - R$3,50");
    total = total + 3.50;
    if (pedido != "") {
        pedido = pedido + ", Suco Natural";
    } else {
        pedido = pedido + "Suco Natural";
    }
} else if (item3 == 3) {
    console.log("Item 3: Salada de Frutas - R$4,00");
    total = total + 4.00;
    if (pedido != "") {
        pedido = pedido + ", Salada de Frutas";
    } else {
        pedido = pedido + "Salada de Frutas";
    }
} else {
    console.log("Item 3: Nenhum item escolhido");
}

console.log("");
console.log("=== RESUMO DO PEDIDO ===");

if (pedido != "") {
    console.log("Itens do pedido: " + pedido);
    console.log("Total a pagar: R$" + total);
} else {
    console.log("Nenhum item foi selecionado.");
}

console.log("");
console.log("Para fazer outros pedidos, mude os valores das variáveis 'item1', 'item2' e 'item3'!");

# Aula 56 — Miniprojeto: Gerenciamento de Inventário de Loja Virtual

## Descrição do desafio

Desenvolvimento de um sistema de inventário para uma loja virtual, focado na criação e manipulação de objetos JavaScript.

Cada produto no estoque é representado como um objeto com as propriedades:
- `codigo`: identificador numérico único.
- `nome`: descrição do produto.
- `preco`: valor unitário (R$).
- `quantidade`: unidades disponíveis em estoque.

## Funções implementadas (separadas conforme instrução)

1. `adicionarProduto(inventario, novoProduto)`: insere um novo produto no inventário.
2. `removerProduto(inventario, codigo)`: remove o produto associado ao código.
3. `atualizarQuantidade(inventario, codigo, novaQuantidade)`: atualiza o estoque de um produto (aumentando ou diminuindo).
4. `atualizarPreco(inventario, codigo, novoPreco)`: altera o preço de venda de um item.
5. `verificarExiste(inventario, codigo)`: retorna se o produto está cadastrado no sistema.
6. `buscarMaisBaratosQue(inventario, valorMaximo)`: filtra e retorna apenas os produtos com preço inferior ao valor `X` informado.

## Habilidades trabalhadas

- Criação e modificação de propriedades de objetos (`obj.preco`, `obj.quantidade`).
- Manipulação de arrays de objetos (`find`, `findIndex`, `filter`, `splice`).
- Código comentado e estruturado didaticamente para alunos do Ensino Médio.

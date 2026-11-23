# Aula 55 — Miniprojeto: Plantações de Arrayville

## Descrição do desafio

Arrayville é conhecida por suas vastas plantações de frutas e vegetais, colhidos em épocas específicas do ano.

Para resolver o problema de organização dos agricultores, desenvolvemos a classe `Plantacoes` para ordenar as colheitas em ordem alfabética e comparar as listas de produtos com outras remessas usando métodos nativos e comparações de comprimento e conteúdo.

## Estrutura da classe `Plantacoes`

- **Atributos**:
  - `this.frutas`: array com os nomes das frutas colhidas.
  - `this.vegetais`: array com os nomes dos vegetais colhidos.
- **Métodos**:
  1. `ordenarColheitas()`: ordena tanto a lista de frutas quanto a de vegetais em ordem alfabética com `sort()`.
  2. `maiorLista()`: compara os tamanhos (`.length`) e informa qual colheita produziu mais itens ou se houve empate.
  3. `compararFrutas(outraLista)`: compara se uma remessa externa de frutas possui exatamente o mesmo tamanho e conteúdo da lista da classe usando `every()`.
  4. `verificarSeTemListaVazia()`: identifica se alguma plantação ainda não foi colhida (tamanho igual a zero).

## Habilidades trabalhadas

- Ordenação de strings com `sort()` e `localeCompare()`.
- Verificação de comprimento com `.length`.
- Comparação estrutural de arrays com o método `every()`.

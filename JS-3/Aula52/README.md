# Aula 52 — Miniprojeto: Organização do Catálogo da Biblioteca Saber Infinito

## Descrição do desafio

A biblioteca "Saber Infinito" está passando por uma grande reorganização em seu catálogo de livros.

Neste miniprojeto, criamos um conjunto de funções para gerenciar e manipular listas de livros utilizando operações de corte, junção, inserção posicional e o operador de espalhamento (*spread operator*).

## Funções implementadas

1. **Substituir livro na mesma posição**: substitui um livro existente por um novo mantendo a ordem.
2. **Adicionar livro no início**: insere um livro no topo da lista usando `unshift` ou spread `[novo, ...livros]`.
3. **Adicionar livro ao final**: insere um livro no fim da lista usando `push` ou spread `[...livros, novo]`.
4. **Adicionar em posição específica**: usa `splice(posicao, 0, novoLivro)`.
5. **Remover de posição específica**: remove o livro na posição indicada com `splice(posicao, 1)`.
6. **Combinar listas de diferentes seções**: funde seções (ex.: Literatura e Ciências) com `[...secao1, ...secao2]`.

## Habilidades trabalhadas

- Manipulação de arrays com `splice()`, `slice()`, `push()` e `unshift()`.
- Junção flexível com o operador spread (`...`).
- Código simples, legível e comentado para iniciantes.

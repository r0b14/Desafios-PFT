# Aula 51 — Miniprojeto: Adicionar e remover elementos em arrays

## Descrição do desafio

O Natal está chegando e a prefeitura do Recife precisa fazer um sistema para gerenciar a lista de todas as tarefas de decorações da cidade.

Neste miniprojeto, criamos uma classe para gerenciar essa lista de tarefas utilizando operações de adição e remoção de elementos no início e no final de arrays, combinando métodos nativos (`push`, `unshift`, `pop`, `shift`) e manipulação manual.

## Objetivos e conceitos trabalhados

- Criação e instanciação de classes em JavaScript.
- Inserção de elementos:
  - `push()`: adiciona ao final da lista.
  - `unshift()`: adiciona ao início da lista.
- Remoção de elementos:
  - `shift()`: remove do início da lista.
  - **Manipulação manual**: remoção do último elemento ajustando manualmente a propriedade `length` e usando laço de repetição.
- Teste com múltiplas instâncias da classe (ex.: decorações do Polo Marco Zero e Polo Boa Viagem).

## O que a aplicação faz

Uma interface visual intuitiva permite cadastrar tarefas no início ou no fim, além de remover itens pelos dois extremos, exibindo o estado da lista em tempo real.

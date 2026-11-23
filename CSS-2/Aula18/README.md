# Aula 18 — Pseudo-elementos (before e after)

## Resumo do assunto

Pseudo-elementos permitem inserir conteúdo decorativo antes (`::before`) ou depois (`::after`) do conteúdo de um elemento diretamente pelo CSS, sem precisar alterar o HTML.

## Parte técnica

- A propriedade `content: ""` é obrigatória para que o pseudo-elemento seja renderizado.
- `::before` insere antes do primeiro filho.
- `::after` insere após o último filho.
- Comum para criar ícones decorativos, aspas em citações e linhas divisórias.

## O que o miniprojeto atende

Cartões de citação estilizados com aspas decorativas e marcadores personalizados via `::before` e `::after`.

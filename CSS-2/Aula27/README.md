# Aula 27 — Flexbox: Crescimento e Encolhimento (grow, shrink e basis)

## Resumo do assunto

As propriedades `flex-grow`, `flex-shrink` e `flex-basis` controlam a capacidade dos itens flexíveis de se expandir para ocupar espaços vazios ou encolher para não transbordar o container.

## Parte técnica

- `flex-grow: 1`: o item cresce para preencher o espaço disponível.
- `flex-shrink: 0`: o item nunca encolhe, mantendo seu tamanho mínimo.
- `flex-basis`: define o tamanho base inicial do item antes da distribuição do espaço restante.
- Atalho `flex: 1` (comum para colunas de tamanho igual).

## O que o miniprojeto atende

Layout de blog com barra lateral de tamanho fixo (`flex: 0 0 200px`) e área de conteúdo expansível (`flex: 1`).

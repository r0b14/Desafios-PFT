# Aula 29 — CSS Grid: Unidade fr e Função repeat()

## Resumo do assunto

A unidade `fr` (*fração*) calcula dinamicamente o espaço restante do container, dispensando cálculos manuais de porcentagem. A função `repeat()` economiza repetição de código.

## Parte técnica

- `1fr`: uma fração proporcional do espaço disponível.
- `repeat(3, 1fr)`: equivalente a `1fr 1fr 1fr` (cria 3 colunas iguais).
- Combinação de colunas fixas e flexíveis: `200px 1fr`.
- `gap` para criar calhas uniformes entre linhas e colunas.

## O que o miniprojeto atende

Catálogo responsivo com `repeat()` e fração flexível `fr`.

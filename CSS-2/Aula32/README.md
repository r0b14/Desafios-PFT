# Aula 32 — Variáveis CSS (Custom Properties)

## Resumo do assunto

Variáveis no CSS (Custom Properties) permitem armazenar valores reutilizáveis — como cores de tema, fontes e espaçamentos — em um único lugar, facilitando alterações globais em todo o site.

## Parte técnica

- Declaradas com dois hifens: `--nome-da-variavel: valor;`.
- Escopo global declarado na pseudo-classe `:root`.
- Uso com a função `var(--nome-da-variavel)`.
- Suporte a valor padrão de segurança: `var(--cor, #000)`.

## O que o miniprojeto atende

Cartão temático estilizado usando paleta de cores centralizada em variáveis CSS.

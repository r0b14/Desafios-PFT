# Aula 33 — Modo Claro e Escuro (Dark Mode)

## Resumo do assunto

O suporte ao tema escuro melhora o conforto visual em ambientes com pouca luz. Isso é implementado redefinindo as variáveis de cor com a media query `prefers-color-scheme` ou através de classes dinâmicas.

## Parte técnica

- `@media (prefers-color-scheme: dark)`: detecta a preferência do sistema operacional do usuário.
- Alternância de temas sobrescrevendo valores de variáveis CSS.
- Transição suave entre as cores de fundo e texto.

## O que o miniprojeto atende

Página com botão interativo para alternar manualmente entre tema Claro e Escuro.

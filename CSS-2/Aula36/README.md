# Aula 36 — Animações com @keyframes

## Resumo do assunto

Enquanto transições precisam de um gatilho do usuário (como `:hover`), as animações com `@keyframes` podem rodar sozinhas, ter múltiplas etapas (0%, 50%, 100%) e repetir indefinidamente.

## Parte técnica

- `@keyframes nomeDaAnimacao { ... }`: define as etapas visuais da animação.
- `animation-name`: associa o keyframe ao elemento.
- `animation-duration`: tempo de duração de cada ciclo.
- `animation-fill-mode: forwards`: mantém o estado final ao terminar.

## O que o miniprojeto atende

Cartão com animação suave de entrada deslizante (*fade in + slide up*).

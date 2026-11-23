# Aula 31 — Imagens Responsivas e Enquadramento (object-fit e aspect-ratio)

## Resumo do assunto

Ao trabalhar com fotos de proporções variadas, é comum que fiquem distorcidas ou esticadas. A propriedade `object-fit` resolve esse problema controlando como a imagem se adapta ao espaço disponível.

## Parte técnica

- `object-fit: cover`: preenche todo o espaço cortando suavemente as sobras, sem distorcer.
- `object-fit: contain`: preserva a imagem inteira sem cortes.
- `aspect-ratio: 16 / 9` ou `1 / 1`: mantém a proporção do elemento mesmo quando ele encolhe.

## O que o miniprojeto atende

Galeria de fotos com enquadramento perfeito usando `object-fit: cover` e `aspect-ratio`.

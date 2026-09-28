# Aula 38 — Código síncrono, assíncrono e callbacks

## Resumo

Código síncrono é executado em ordem. Código assíncrono pode esperar uma tarefa terminar sem bloquear o restante do programa.

## Parte técnica

- `setTimeout` espera 5 segundos antes de executar sua função.
- `aumentarContador` chama a si mesma para repetir a ação três vezes.
- `mostrarNumero` é um callback: uma função enviada como argumento para ser usada depois.

## O que o miniprojeto atende

Contador que aumenta a cada 5 segundos usando `setTimeout`, recursividade e callback.

# Aula 32 — Propriedades do erro

O objeto recebido no `catch` tem propriedades úteis para depuração.

- `name` informa o tipo, como `ReferenceError`, `SyntaxError` ou `RangeError`.
- `message` apresenta o motivo do erro.
- A solução deve corrigir a causa: declarar variáveis, validar dados e conferir limites de arrays.
- Mostrar uma mensagem controlada ao usuário é melhor que deixar o erro interromper a aplicação.

# Aula 31 — Tratamento de erros

Este laboratório apresenta falhas comuns sem interromper a interface.

- `try` contém o trecho que pode falhar.
- `catch (erro)` recebe o objeto do erro e permite mostrar uma mensagem amigável.
- `erro.name` identifica a categoria; `erro.message` explica o problema.
- `throw new Error(...)` cria um erro intencional quando uma regra do programa não é atendida.

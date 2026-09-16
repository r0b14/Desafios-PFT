# Aula 34 — `finally`

O bloco `finally` é executado tanto depois do `try` quanto depois do `catch`.

- Use-o para tarefas obrigatórias de encerramento, como liberar recursos ou limpar campos.
- `try` realiza a operação crítica.
- `catch` trata a falha sem encerrar a interface.
- Nesta simulação, o campo é limpo no `finally`, independentemente de o código estar correto.

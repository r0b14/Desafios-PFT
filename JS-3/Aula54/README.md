# Aula 54 — Miniprojeto: Análise de Notas do Carnaval do Rio de Janeiro

## Descrição do desafio

O Carnaval do Rio de Janeiro precisa de um sistema para analisar as notas obtidas pelas escolas de samba e extrair estatísticas e verificações rápidas.

Array de notas fornecido:
```javascript
const notas = [
  7.5, 10, 8.0, 6.9, 8.9, 10, 9.9, 8.6, 7.5, 9.5, 9.6, 7.9, 8.0, 9.8,
  10, 10, 10, 7.0, 9.6, 8.9, 9.9, 8.6, 7.5, 5.5, 9.6, 7.9, 8.0, 9.8, 10, 10
];
```

## Funções implementadas

1. **Primeira nota acima de um valor**: encontra o primeiro valor maior que o limite informado usando `find()`.
2. **Índice da primeira nota abaixo de um valor**: encontra a posição (índice) do primeiro valor menor que o limite usando `findIndex()`.
3. **Verificar presença de nota exata**: confere se um número específico está contido na lista usando `includes()`.
4. **Todas as notas acima da média**: calcula a média geral e verifica se 100% das notas superam esse valor usando `every()`.
5. **Alguma nota abaixo de um valor**: verifica se existe ao menos uma ocorrência abaixo do limite usando `some()`.

## Habilidades trabalhadas

- Métodos de busca: `find()` e `findIndex()`.
- Métodos de validação booleana: `includes()`, `every()` e `some()`.
- Código com explicações detalhadas em português para o Ensino Médio.

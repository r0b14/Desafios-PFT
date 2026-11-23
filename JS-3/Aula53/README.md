# Aula 53 — Miniprojeto: Análise de Faixa Etária no "Inglês Fácil"

## Descrição do desafio

O curso de inglês "Inglês Fácil" deseja fazer uma análise detalhada da faixa etária de seus alunos utilizando diferentes métodos de iteração e agregação em JavaScript (`for`, `forEach`, `filter`, `reduce`, `sort`, `slice`).

Array de idades fornecido:
```javascript
const idades = [23, 15, 14, 28, 30, 19, 5, 10, 8, 45, 7, 11, 15, 20, 32, 12, 9, 26, 41, 15, 37, 10, 22, 25, 17, 16, 19];
```

## Funções desenvolvidas

1. **Alunos com mais de X anos**: filtra e conta as idades estritamente maiores que o valor `X` informado (`filter`).
2. **Alunos com menos de X anos**: filtra e conta as idades estritamente menores que `X` (`filter`).
3. **Média de idades**: soma todas as idades com `reduce` e divide pelo número total de alunos.
4. **Aluno mais novo**: identifica a menor idade presente (`Math.min` ou laço de comparação).
5. **Aluno mais velho**: identifica a maior idade presente (`Math.max` ou laço de comparação).
6. **5 alunos mais jovens**: ordena a lista em ordem crescente e extrai os 5 primeiros elementos (`sort` e `slice`).
7. **5 alunos mais velhos**: ordena a lista em ordem decrescente e extrai os 5 primeiros elementos (`sort` e `slice`).

## Habilidades trabalhadas

- Métodos de iteração em arrays: `filter()`, `reduce()`, `forEach()`.
- Ordenação com `sort()` e recorte com `slice()`.
- Código limpo, comentado e focado no aprendizado para o Ensino Médio.

# Aula 57 — Miniprojeto: Cronômetro de Cozinha do Chef

## Descrição do desafio

Você é o chef de um restaurante movimentado e precisa controlar o tempo de cozimento de pratos com um cronômetro regressivo de cozinha, garantindo que nenhum prato passe do ponto ou queime.

Neste miniprojeto, praticamos funções de temporização em JavaScript (`setInterval`, `clearInterval`, `setTimeout`).

## Funcionalidades implementadas

1. **Iniciar com valor específico**: o usuário informa o tempo desejado em segundos (ex.: 30 segundos) e o cronômetro inicia a contagem regressiva.
2. **Pausar e Continuar**: pausa a contagem congelando o tempo restante com `clearInterval` e retoma de onde parou ao clicar em continuar.
3. **Finalizar a qualquer momento**: cancela o cronômetro e redefine os valores imediatamente.
4. **Alerta sonoro/visual**: quando o cronômetro atinge 0 segundos, exibe um alerta de que o prato está pronto!

## Habilidades trabalhadas

- Uso de `setInterval()` para contagem periódica a cada 1 segundo (1000ms).
- Uso de `clearInterval()` para pausar e resetar temporizadores.
- Integração do temporizador com o DOM e mensagens no `console.log`.

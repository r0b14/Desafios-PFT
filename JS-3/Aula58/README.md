# Aula 58 — Miniprojeto: Aplicativo de Agenda TimeMaster

## Descrição do desafio

Desenvolvimento do núcleo de agendamento de eventos para o aplicativo **TimeMaster**, manipulando e comparando datas e horários em JavaScript.

## Classe `Eventos`

- **Atributos**:
  - `this.listaEventos`: array de objetos de eventos, contendo:
    - `id`: identificador numérico único.
    - `titulo`: nome do evento.
    - `data`: objeto `Date` representando dia, mês, ano e hora.
    - `local`: espaço ou plataforma do evento.
- **Métodos requeridos**:
  1. `adicionarEvento(novoEvento)`: insere um evento na agenda.
  2. `removerEvento(id)`: remove um evento pelo seu identificador único.
  3. `obterEventosPassados()`: filtra os eventos cuja data e hora são anteriores ao momento atual (`data < new Date()`).
  4. `obterEventosProximoMes()`: filtra os eventos agendados para o mês seguinte, comparando `getMonth()` e `getFullYear()`.

## Métodos de data explorados

- `new Date()`
- `getFullYear()`: ano com 4 dígitos.
- `getMonth()`: mês (0 a 11).
- `getHours()` e `getMinutes()`: horário do evento.
- `toLocaleDateString('pt-BR')` e `toLocaleTimeString('pt-BR')`.

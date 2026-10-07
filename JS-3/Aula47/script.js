class Pessoa {
  constructor(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
  }

  cumprimentar() {
    return `Olá, eu sou ${this.nome}.`;
  }
  andar() {
    return `${this.nome} está andando.`;
  }
  mudarIdade(novaIdade) {
    this.idade = novaIdade;
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, genero, matricula, curso, turma) {
    super(nome, idade, genero);
    this.matricula = matricula;
    this.curso = curso;
    this.turma = turma;
  }

  estudar() {
    return `${this.nome} está estudando ${this.curso}.`;
  }
  fazerProva() {
    return `${this.nome} está fazendo uma prova.`;
  }
  trocarCurso(novoCurso) {
    this.curso = novoCurso;
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, genero, especialidade, salario, sala) {
    super(nome, idade, genero);
    this.especialidade = especialidade;
    this.salario = salario;
    this.sala = sala;
  }

  ensinar() {
    return `${this.nome} ensina ${this.especialidade}.`;
  }
  corrigirProvas() {
    return `${this.nome} está corrigindo provas.`;
  }
  trocarEspecialidade(novaEspecialidade) {
    this.especialidade = novaEspecialidade;
  }
}

document.querySelector("#mostrar").addEventListener("click", () => {
  const ana = new Estudante(
    "Ana",
    17,
    "feminino",
    "2024-01",
    "JavaScript",
    "A",
  );
  const bruno = new Estudante("Bruno", 18, "masculino", "2024-02", "CSS", "B");
  const clara = new Professor(
    "Clara",
    35,
    "feminino",
    "Programação",
    4500,
    "12",
  );
  const diego = new Professor("Diego", 40, "masculino", "Design", 4800, "8");

  ana.trocarCurso("JavaScript Avançado");
  clara.trocarEspecialidade("Front-end");

  const linhas = [ana, bruno, clara, diego].map(
    (pessoa) => `${pessoa.cumprimentar()} ${pessoa.andar()}`,
  );
  linhas.push(ana.estudar(), clara.ensinar());
  document.querySelector("#resultado").textContent = linhas.join("\n");
  console.log({ ana, bruno, clara, diego });
});

class Aluno {
    constructor(name, sexo, serie) {
        this.name = name;
        this.sexo = sexo;
        this.serie = serie;
        this.altura = 1.68;
        this.media = 0.0;
    }

    calcularMedia(nota1, nota2) {
        this.media = (nota1 + nota2)/2
        if (this.media >= 7) {
            console.log("Aprovado!")
        } else {
            console.log("Reprovado!\n Estude mais")
        }
    }
}

let alunoMatheus = new Aluno("Matheus","Masculino",2);
console.log(alunoMatheus)

alunoMatheus.calcularMedia(4.2,9.8);
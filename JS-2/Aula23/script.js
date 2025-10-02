const pessoas = [
  { nome: "Ana Silva", email: "ana.silva@gmail.com" },
  { nome: "Bruno Oliveira", email: "bruno.oliveira@yahoo.com" },
  { nome: "Carlos Souza", email: "carlos.souza@hotmail.com" },
  { nome: "Daniela Pereira", email: "daniela.pereira@gmail.com" },
  { nome: "Eduardo Santos", email: "eduardo.santos@gmail.com" },
  { nome: "Fernanda Lima", email: "fernanda.lima@hotmail.com" },
  { nome: "Gustavo Almeida", email: "gustavo.almeida@gmail.com" },
  { nome: "Helena Costa", email: "helena.costa@outlook.com" },
  { nome: "Igor Ribeiro", email: "igor.ribeiro@yahoo.com" },
  { nome: "Juliana Fernandes", email: "juliana.fernandes@gmail.com" },
  { nome: "Lucas Rocha", email: "lucas.rocha@gmail.com" },
  { nome: "Mariana Cardoso", email: "mariana.cardoso@outlook.com" },
  { nome: "Nicolas Martins", email: "nicolas.martins@hotmail.com" },
  { nome: "Olivia Azevedo", email: "olivia.azevedo@gmail.com" },
  { nome: "Paulo Rodrigues", email: "paulo.rodrigues@yahoo.com" }
];

//Exenplo acessando dados de um objeto.

const meuObjeto = { name: "tulio", email: "meuemail@email.com"}

console.log(meuObjeto.name) // Neste exemplo temos o valor do name sendo retornado.

// Agora, vamos criar a tabela dinamicamente
// Primeiro, selecionamos a tabela no DOM
const tabela = document.querySelector('table');

// Para cada pessoa no array, criamos uma linha (tr)
pessoas.forEach(pessoa => {
  // Criamos um elemento tr (linha da tabela)
  const linha = document.createElement('tr');
  
  // Verificamos se o email é do Gmail
  if (pessoa.email.includes('@gmail.com')) {
    // Se for, adicionamos a classe 'gmail' para destacar com fundo verde
    linha.classList.add('gmail');
  }
  
  // Criamos a célula para o nome
  const celulaNome = document.createElement('td');
  celulaNome.textContent = pessoa.nome;
  
  // Criamos a célula para o email
  const celulaEmail = document.createElement('td');
  celulaEmail.textContent = pessoa.email;
  
  // Adicionamos as células à linha
  linha.appendChild(celulaNome);
  linha.appendChild(celulaEmail);
  
  // Adicionamos a linha à tabela
  tabela.appendChild(linha);
});
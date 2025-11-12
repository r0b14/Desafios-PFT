// Entendendo a diferença entre o textContext e innerHTML

let titleMain = document.getElementById("main-heading");
titleMain.textContent = 'Novo Titulo - Vindo do JS'

let div = document.getElementById("main");
div.innerHTML = '<p> New Paraghap </p>'

// Usando os métodos get e set

let link = document.querySelector('a')
link.setAttribute('href', 'https://instagram.com') // alterando o atributo href do link


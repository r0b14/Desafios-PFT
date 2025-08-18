const carro = document.getElementById("carro");
const farol = document.getElementById("farol");

function handleClick() {
  farol.classList.toggle('farol-ligado');
}

carro.addEventListener('click', handleClick);
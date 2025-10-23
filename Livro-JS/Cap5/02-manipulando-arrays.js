/**
 * Exercício 3 - Manipulando Arrays
 */

let fruits = ["uva", "banana", "morango"];
console.log(fruits);

// Adicionando uma nova fruta.
fruits.push("laranja");
console.log(fruits);
// removendo o primeiro elemento
fruits.shift();
console.log(fruits);

/**
 * Exercício 4 - Join e slice
 */

// Criar uma string com todos os elementos do array separada por `,`
let fruitsString = fruits.join(", ")
console.log(fruitsString);
// Uma outra opção rápida
// console.log(fruits.join(", "))

// Slide
let fruitsSlice = fruits.slice(1, 3)
console.log(fruitsSlice);

/**
 * Exercício 5 - map
 */
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.map(x => x * x);
console.log(sum);
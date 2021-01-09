/*
  Javascript não possui classes!
  A funcionalidade de classe é realizada por protótipos de objetos.
  As funções são objetos, dando a capacidade de armazenar códigos executáveis.
*/

var a = 0.2
var b = 0.3

function sum(b, c) {
  return b + c
}

var c = sum(a, b)
console.log("the name " + c);
console.log(typeof(c));
sum(a, b);

// O Objeto Mathclear possui métodos específicos e permite manipular funções e constantes

parseInt("24", 10) // 24

  // Operador unário
  + "414" // 414

parseInt("what", 2); // NaN

parseInt("241d", 10) // 241d
console.log(parseInt("241f", 10));

+ "12fa" // NaN

const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

console.log(parseInt('128',10))

console.log(Math.PI)

console.log(Math.round(2.4)) // número mais próximo
console.log(Math.random())

console.log(Number)

console.log(Number('23') + 4);

console.log(Number('a23') + 2);

parseInt("10ab" + c);

console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true


/*
Dentro de uma função, this referencia global
Fora do escopo de uma função, this referencia o modulo externo
*/
function logThis() {
    console.log('Nessa situação, acontece: ')
    console.log(this === exports)
    console.log(this === module.exports)

    console.log(this === global)
}

logThis()
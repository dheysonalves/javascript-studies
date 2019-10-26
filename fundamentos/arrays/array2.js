const arr = [2, 3, 4, 1, 5]

console.log(arr.concat([5, 6], 11, 21))

let arrayLike = {
    0: 'something',
    1: 'testing',
    [Symbol.isConcatSpreadable]: true,
    lenght: 2
}

console.log(arr.concat(arrayLike))
console.log(arr.includes(NaN))

let resultado = arr.map(multiplyBy2)

function multiplyBy2(input) {
    return input * 2
}

console.log(resultado)

let plusTwo = e => e + 2
let tripleX = e => e * 3
let moneyHeist = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

resultado = arr.map(plusTwo).map(tripleX).map(moneyHeist)

console.log(resultado)

const carrinho = [
    '{"nome": "Borracha", "preco": "1.24"}',
    '{"nome": "Caderno", "preco": "13.94"}',
    '{"nome": "Kit de caderno", "preco": "41.222"}',
    '{"nome": "Caneta", "preco": "7.54"}'
]

let parseObject = e => JSON.parse(e)
let onlyPrice = produto => produto.preco

console.log(carrinho.map(parseObject).map(onlyPrice))


const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

let onlyDog =  e => e.type == 'dog'
let returnAge = e => e.age *= 7
let sumThemAll = e => e.age 
console.log(data.filter(onlyDog).map(returnAge))  
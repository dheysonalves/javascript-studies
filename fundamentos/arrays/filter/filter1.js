Array.prototype.filter2 = function(callback) {
    const arrayType = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            arrayType.push(this[index])
        }
    }
    return arrayType
}

const produtos = [
    {nome: 'Notebook', preco: 2314, fragil: true},
    {nome: 'Lavadoura', preco: 2314, fragil: true},
    {nome: 'Copo de plastico', preco: 12.32, fragil: false},
]

let priceHight = produtos => produtos.preco > 1000
let isFragile = produtos => produtos.fragil == true

console.log(produtos.filter2(priceHight).filter2(isFragile))

console.log(produtos.filter(function(e){
    return e.preco > 1000 & e.fragil == true
}))

const student = [
    {nome: 'Paulo', age: 32, curso: 'Ciencia'},
    {nome: 'Paula', age: 23, curso: 'Ciencia'},
    {nome: 'Rodrigues', age: 22, curso: 'Ciencia'}
]

let byAge = e => e.age > 24

console.log(student.filter(byAge))


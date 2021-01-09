Array.prototype.map2 = function(callback) {
    let newArray = []
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": "1.24"}',
    '{"nome": "Caderno", "preco": "13.94"}',
    '{"nome": "Kit de caderno", "preco": "41.222"}',
    '{"nome": "Caneta", "preco": "7.54"}'
]

let parseObject = e => JSON.parse(e)
let onlyPrice = produto => produto.preco

console.log(carrinho.map2(parseObject).map2(onlyPrice))
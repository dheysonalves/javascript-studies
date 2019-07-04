function Estojo(quantidadeTotal = 50, cores = 5) {
    let quantidadeAtual = 0

    this.adiciona = function () {
        if ( quantidadeAtual + cores <= quantidadeTotal) {
            quantidadeAtual += cores
        } else {
            quantidadeAtual = quantidadeTotal
        }
    }

    this.getQuantidade = function () {
        return quantidadeAtual
    }
}

const um = new Estojo()
um.adiciona()
console.log(um.getQuantidade())

console.log(typeof Estojo)
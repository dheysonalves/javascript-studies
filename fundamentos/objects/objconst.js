const Aluno = { nome: 'Jonnhy', numero: 342 }
console.log(Aluno)

// Aluno = { nome: 'Marta' }k

function Constructing (nome, numero) {
    this.nome = nome;
    this.getConstructing = () => {
        return numero;
    }
}

const x = new Constructing('James', 2077)
console.log(x.getConstructing())

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.getPrecoQtd = () => {
            return preco * quantidade;
        };
    }
}

const obj = new Produto('Jake', 2,89, 20)
console.log(obj.getPrecoQtd())

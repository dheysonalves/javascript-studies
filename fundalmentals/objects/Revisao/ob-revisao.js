const Aluno = {
    nome: 'John',
    sobrenome: 'Alves',
    telefone: '81-9-922121',
    email: 'dh@gmail.com',
    endereco: {
        logradouro: 'Augustino',
        bairro: 'Cedro',
        cep: '55000-000',
        cidade: 'Caruaru',
        estado: 'Pernambuco',
        pais: 'Brasil'
    }
}

console.log(Aluno)

let obj = new Object

obj.nome = "Silva"
console.log(obj)

function Produto (nome, preco, quantidade) {
    this.nome = nome
    this.getPrecoQtd = () => {
        return preco * quantidade
    }
}

const p1 = new Produto('Teste', 2.43, 5)
const p2 = new Produto('Teste2', 2.55, 6)

console.log(p1.getPrecoQtd(), p2.getPrecoQtd())
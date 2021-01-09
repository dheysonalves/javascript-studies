function criarPessoa() {
    return {
        nome: 'John',
        age: 55
    }
}

console.log(criarPessoa())

function criarPessoa2(nome, age, preco) {
    return {
        nome,
        age,
        preco
    }
}

console.log(criarPessoa2('Pedro', 55, 2.0))

// EXERCICIO FUN CONSTRUTOR

function Pessoa(nome) {
    this.falar = function () {
        console.log(`Meu nome e ${nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()
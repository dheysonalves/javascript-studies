const pessoa = {
    saudacao : "bom dia",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar();

const falando = pessoa.falar.bind(pessoa);
falando();


function f1() { // f1() === window;
    return this;
}


function Dinheiro() {
    this.quantidade = 30
    setInterval(() => {
        this.quantidade++
        console.log(this.quantidade)
    }, 1000);
}

new Dinheiro

function Animal () {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000);
}

new Animal
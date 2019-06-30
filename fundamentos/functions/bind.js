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


function f1() {
    return this;
}

// f1() === window;

function Dinheiro() {
    this.quantidade = 30
    setInterval(() => {
        this.quantidade++
        console.log(this.quantidade)
    }, 1000);
}

new Dinheiro
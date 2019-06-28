function teste(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log("Dentro da fun exec");
    }
}

const teste1 = new teste('teste');
console.log(teste1.nome);
teste1.exec();

const obj = {}
obj.nome = 'testando';

console.log(obj.nome);
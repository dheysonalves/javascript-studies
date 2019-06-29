"use strict"

// Para acessar objetos, um metodo pode usar a palavra this

let userTest = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name);
    }
}

userTest.sayHi();

// Dependendo de quem esta chamando, a chamada e diferente

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f']();

/*
    O conceito de tempo de execução avaliado tem vantagens e desvantagens.
     Por um lado, uma função pode ser reutilizada para diferentes objetos. 
     Por outro lado, uma maior flexibilidade abre um espaço para erros.
*/

let object = {
    nome: 'John',
    numero: 10,
    falaOi() {
      console.log('Olá' + this.nome);
    }
}

console.log(object.nome);
console.log(object.falaOi());

const retorno = object.falaOi.bind(object);
retorno();

let a = 3;
console.log(this.a);

this.c = 289;
console.log(this.c);
global.b = 99;
console.log(global.b);

console.log(module.exports.c)
console.log(module.exports === this)

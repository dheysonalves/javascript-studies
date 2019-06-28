"use strict"

// Para acessar objetos, um metodo pode usar a palavra this

let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name);
    }
}

user.sayHi();

// Dependendo de quem esta chamando, a chamada e diferente

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
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
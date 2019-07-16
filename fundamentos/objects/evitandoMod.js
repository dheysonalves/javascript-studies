// PREVENT EXTENSIONS

const animal = Object.preventExtensions({
    nome: 'Gato',
    raca: 'Siames',
    voz: 'Meaw'
})

animal.nome = 'Cachorro';
animal.altura = 1.32;
animal.voz = 'Au'

delete animal.voz

console.log(animal)

// SEAL

const pessoa = Object.seal({
    nome: 'Juliane',
    idade: 25
});

pessoa.nome = 'Jane'
pessoa.altura = 12.0
delete pessoa.idade

console.log(pessoa)

// FREEZE


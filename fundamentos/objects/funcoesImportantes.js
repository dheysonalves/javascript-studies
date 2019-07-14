// Sobre algumas funcoes dos objetos

const aluno = {
    nome: 'Carla',
    matricula: 17892093,
    curso: 'Ciencia da Computacao',
    get info() {
        return this.nome + this.matricula;
    }
}

console.log(Object.keys(aluno)); // @param keys
console.log(Object.values(aluno)); // values 
console.log(Object.entries(aluno)); // keys : values
console.log(typeof aluno.info); // string

Object.entries(aluno).forEach(([chave, valor]) => {
   console.log(`${chave}: ${valor}`) 
});

Object.defineProperty(aluno, 'dataNascimento', {
    enumerable: false,
    writable:false,
    value: '01/01/2019'
})
aluno.dataNascimento = '02/03/1082';
console.log(aluno.dataNascimento);
console.log(Object.keys(aluno));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((values) => {
    console.log(`${values}`)
});

// Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2 )

Object.freeze(obj)
obj.c = 1234
console.log(obj)

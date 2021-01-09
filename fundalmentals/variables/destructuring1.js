// Desestruturação em Objetos- Introduzido no ES5 

const pessoa = {
    nome: 'John',
    telefone: '89182-31244',
    endereco: {
        logradouro: 'Rua lourinaldo',
        num: 25,
        uf: 'PE'
    }
}

// Desestruturando abaixo

const { nome, telefone } = pessoa;
console.log(nome, telefone);

const {endereco} = pessoa;
console.log(endereco);

const {endereco: {logradouro, num, uf }} = pessoa;
console.log(logradouro, num, uf);

/* 
O código abaixo retorna um erro,
não é possível desestruturar a partir de uma raiz que não exista(null ou undefined).

const {conta: {agencia, numero}} = pessoa;
console.log(agencia, numero);

*/

const {tempo, boole = true} = pessoa;
console.log(tempo, boole);

// Desestruturação em Arrays- Introduzido no ES5

const [a] = [10];
console.log(a);

const [n1, , n3, , n4 = 0] = [10, 3, 4, 74];
console.log(n1, n3, n4);

const [, [, nota]] = [[8, 3, 4], [9, 10, 22]];
console.log(nota);

// Desestruturação com funções - Introrduzido no ES5

function rand ({min = 0 , max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({min: 30, max: 40}));

const obj = {min: 100, max: 500};
console.log(rand(obj));

console.log(rand({}));

function somando ({a = 4, b = 8}) {
    let valor = Math.pow(a, b) + a;
    return valor;
}

console.log(somando({a:2, b: 4}));
/*
    Nas chaves das propriedades dos objetos, elas podem
    ser apenas do tipo Strings e do tipo Symbol.
*/

// A linha abaixo cria um simbolo
let id = Symbol();

// A linha abaixo cria uma definicao para o simbolo
let id4 = Symbol("id");

/*
    A descricao nao afeta nada, e apenas uma label.
    Logo, podemos criar varios simbolos, com a mesma
    descricao.
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // falso

/*
    Synbols nao possuem auto conversao para String
    E uma "Protecao de linguagem"
    Pois ambos sao fundamentalmente diferentes
    Temos que fazer manualmente
*/

let id5 = Symbol("id");
console.log(id5.toString());

// Ou pela propriedade
console.log("Propriedade: " + id5.description);

// Argumentos não são Arrays, mas você pode transforma-los em Array

arguments[0] = 'Valor teste';
arguments[1] = 3;

console.log('Tipo de um argumento: ', typeof arguments); // retorna o tipo de um argumento
console.log('Tipo do argumento dentro dos argumentos', typeof arguments[1]); // retorna o tipo do valor dentro do argumento[i]

var args = Array.from(arguments);
console.log('Tamanho dos argumentos passados:', args.length);

function meuConcat(separador) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separador);
}

console.log(meuConcat(";", "Maca", "Morango", "Laranja", "Limao"));

function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(2, 3, 4));
console.log(soma(2, 3.2, 4.4));
console.log(soma('2', 4, '2'));



function subtracao() {
    let sub = 300;
    for (i in arguments) {
        while (sub != 200) {
            sub -= arguments[i];
        }
    }
    return sub;
}

console.log(subtracao(2));

function jumpIn() {
    let duble = 1;
    for (i in arguments) {
        duble *= arguments[i];
    }
    return duble;
}

console.log(jumpIn(3, 4 ,5, 8, 9, 1));
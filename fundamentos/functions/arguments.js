function soma() {
    var soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(2,3,4));
console.log(soma(2, 3.2, 4.4));
console.log(soma('2', 4, '2'));


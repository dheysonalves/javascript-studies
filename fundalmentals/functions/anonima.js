const multi = function (x, y) {
    return x * y;
}

let calculaValores = function (x, y, operacao = multi) {
    console.log(operacao(x, y));
}

calculaValores(5, 2, (x, y) => x + y)
calculaValores(9, 8, function (x, y) {
    return x - y;
})
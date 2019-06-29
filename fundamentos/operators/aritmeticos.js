const [a, b, c, d] = [2, 4, 6, 7];

// operadores binarios aritmeticos
let soma = a + b + c + d;
let subtracao = b - d;
let multiplicacao = d * 2;
let divsao = c / a;
let modulo = c & a;

// Caso coloque um sinal antes do parametro, ele calcula o sinal
console.log(soma, -subtracao, multiplicacao, divsao, modulo);
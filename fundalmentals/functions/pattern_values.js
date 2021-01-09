function soma (a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

function soma1 (a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma(2, 3 ,4), soma(2,3), soma(1), soma());

console.log(soma1(1, 3), soma1())
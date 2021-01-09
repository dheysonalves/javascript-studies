// Questão 3
 /*
    1) Comparação entre A e B;
    2) retorno do menor
 */

 function min (a = 0, b = 0) {
    if (a > b) // return (a > b) ? b : a;
        return b;
    return a;
 }

 const result = min(1);
 console.log(result)

 function pow (x, n = 1) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
 }

    let x = prompt('x?', ' ');
    let n = prompt('n?', ' ');

    if ( n < 1) {
        console.log('Não é suportado, coloque um valor > 0')
    } else {
        console.log(pow(x, n));
    }
var a = 8;
console.log(a);

function qualquer() {
    // var a = undefined;
    console.log(a); // undefined
    var a = 3;
    console.log(a);
}

qualquer();

function getValue () {
    function retornarValor() {
        return 1;
    }
    return retornarValor(); // Sobe as funcoes para o topo
    function retornarValor() {
        return 2;
    }
}

var resultado = getValue();

console.log(resultado);

function pegaValor () {
    // var retornaValor = undefined;
    // var retornaValor = undefined;
    var retornaValor = function() {
        return 1;
    }
    return retornaValor();
    var retornaValor = function() {
        return 2;
    }
}

var resultado2 = pegaValor();
console.log(resultado2);


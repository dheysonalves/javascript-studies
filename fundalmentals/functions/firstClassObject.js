/* 
    Funcao em JS e FIRST-CLASS-OBJECT (Citizens)
    Higher-order function
*/

// forma literal
function fun1 () { }

// Fun anonima em uma variavel
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) {
    return a + b;
}, fun1, fun2]
console.log(array[0](2, 4))

// Armazenar em um atribuito de objeto
const obj = {}
obj.fale = function() { return 'Opa'}
console.log(obj.fale())

// Passa fun como param
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

// Uma fun pode retornar/conter uma fun
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 5)(6)
const cincoMais = soma(2, 3)
cincoMais(4);
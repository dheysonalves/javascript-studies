"hello".length
// Strings também são objetos!
'hello'.charAt(0)
console.log("ok")

console.log("Testando a tab\t Simples")

function stTest(a) { return a[1]}

var str = stTest('okt')

console.log(str)

if ('a' > 'b') 
    console.log('a e maior')
else if ('a' < 'b')
    console.log('b e menor')    
else 
    console.log('sao iguais')

var str_prim = "let"
var str_obj = new String(str_prim)

console.log(typeof(str_prim))
console.log(typeof(str_obj))

var num_str = "2 + 2"
var obj_str = new String("2 + 2")

console.log(eval(num_str))
console.log(eval(obj_str))

console.log(obj_str.valueOf())

[1,2].forEach("Ok")
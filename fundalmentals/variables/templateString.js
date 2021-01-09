var str_simple_literal = 'simples string '+'com um teste'
var str_template = `Esse é um ${str_simple_literal} exemplo!`

console.log(str_simple_literal, str_template)

const up = texto => texto.toUpperCase()
console.log(`Olá... ${up('nome')}`)
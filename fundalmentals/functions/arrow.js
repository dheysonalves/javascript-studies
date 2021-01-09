let dobro = a => a * 2; // retorno implicito
console.log(dobro(Math.PI))

let calculo = (a) => {
    return a * 2
}

console.log(calculo(2 ))

let ola = () => 'Ola'
// let ola = _ => 'Ola'
console.log(ola())

/*
    this nesse escopo de funcao, quando usado comparacao
    ele estara referenciando o escopo global
*/ 
let comparaComThis = function (params) {
    console.log(this === params);   
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Module exports, exporta o this para modulos do node
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Usando o bind com arrow function, ele nao permite alocar com o bind. 
// O this e forcado a ficar ligado ao contexto

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThis(this)
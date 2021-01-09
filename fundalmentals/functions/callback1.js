// CALL BACK BASICO

const array = ['BMW', 'Manhathan', 'Corsa']

function mostraArray(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
// Para cada elemento, ele faz um call back da funcao
array.forEach(mostraArray);
array.forEach(array => console.log(array))

// CALL BACK COM LOOPS
// SEM CALL BACK
let notas = [2.6, 9.4, 7.0, 1.2, 5.6, 7.8, 8.2]

let notasBaixas1 = []

for (let key in notas) {
    if (notas[key] < 7) {
     notasBaixas1.push(notas[key])
    }
}
console.log(notasBaixas1)

// COM CALL BACK
const notasLogica = nota => nota < 7
const notasBaixas2 = notas.filter(notasLogica)
console.log('Com callback: ' + notasBaixas2)
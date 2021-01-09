
function sumInput() {
    const array = []
    let values = prompt('Digite um valor para colocar no array ou Cancel para sair:', 0)
    let currentValue = values
    let sum = currentValue + values 
    if (values != '' || 'Cancel') {
        array.push(values)
    }
    return sum
}

console.log(sumInput())
const modA = require('./unica')
const modB = require('./unica')

const modC = require('./nova')
const modD = require('./nova')()

modA.increase();
modB.increase();

console.log(modA.value)
console.log(modB.value)

modC.increase();
modD.increase();

console.log(modC.value)
console.log(modD.value)
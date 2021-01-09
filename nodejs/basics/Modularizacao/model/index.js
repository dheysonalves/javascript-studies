console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 5;
exports.d = 2
module.exports = 33;

console.log(module.exports)

module.exports = { publico: true}
function f () {}

console.log(f.__proto__ == Function.prototype) // true
console.log(f.__proto__.__proto__ == Object.prototype) // true, herda do Object
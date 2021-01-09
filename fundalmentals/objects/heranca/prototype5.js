console.log(typeof String)
console.log(typeof Array)

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log('Something'.reverse())

Array.prototype.first = function () {
  return this[0]
}

let arr = [1, 2 ,3 ,4 ,5, 6, 7]

console.log(arr.first())

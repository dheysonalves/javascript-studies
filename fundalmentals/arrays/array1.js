let array = [3, 4 ,5 ,6 ,7]
console.log(typeof array)

// FIFO - FIRST IN FIRST OUT
array.shift()
console.log(array)
array.unshift(3)
console.log(array)

// LIFO - LAST IN, LAST OUT
array.push(9)
console.log(array)
array.pop()
console.log(array)

array.sort()
console.log(array)

let copy = array

console.log(copy === array) // copia por referencia

copy.push(11)

console.log(array)
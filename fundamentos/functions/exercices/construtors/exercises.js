// TASK 1 - TWO FUNCTIONS - ONE OBJECT

function A() {  }
function B() {  }

let a = new A;
let b = new B;

console.log(a == b); // true

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true
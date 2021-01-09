'use strict';

function showMessage () {
  let sayMyName = '"World!';
  alert(sayMyName);
}
showMessage();

function txtTest (from, txt) {
  alert('msg' + from + ': ' + txt);
}

txtTest('Ana', 'GO');

function sum (a, b) {
  return a + b;
}

console.log(sum(20, 31));

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

function checkAge(age) {
  return (age > 18) ? true : confirm('Do you have your parents permrision to acess this page?');
}

checkAge(15);

function min (a, b) {
  if (a > b) {
    return `${a}`;
  } else if (a < b) {
    return `${b}`;
  }
  return 'They are equal!';
}
console.log(min(5, 5));

var a = prompt("Qual o valor?");
var b = prompt("Qual a raiz?");
pow(a, b);

function pow (x, n) {
  if (n > 0) {
    for (let i = 1; i < n; i++) {
      var result;
      result *= x;
    }
    return 'Number equal 0';
  }
  return `${result}`;
}

// ARROW FUNCTIONS
let double = n => n * 2;
console.log(double(3));

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // ok now

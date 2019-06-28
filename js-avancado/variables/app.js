// // declarations
//
// var fname = 'Dheyson Alves';
// console.log(fname);
// fname = 'Frank Castle';
// console.log(fname);
//
// var untest;
// console.log(untest);
// untest = 'TESTING';
// console.log(untest);
//
// // There is some ways to declare!
// /*
// Variables does accept underscores,$,letters and numbers
// but do not accept:
// 1 - starting with numbers;
// some not good ways:
// 1 - start with underscores;
// 2 - start with special caractheres;
// */
//
// var _hi;
// // var 2t;
// var $hel;
// var ok;
//
// // CAMELCASE - UNDERSCORE - PASCAL MODE
//
// var firstName;
// var first_name;
// var FirstName;

// LET VARIABLE
let fname = 'Dheyson Alves';
console.log(fname);
fname = 'Frank Castle';
console.log(fname);

alert("not a number" / 2);
// CONST Variables
// Can be modified, but don't reassigned.

const test = 'testing';
console.log(test);

// PRIMITIVES

// 1 - STRINGS

const sType = 'POE';
// A linha abaixo revela o tipo da variável
console.log(typeof sType);

// 2 - numbers

const nUmb = 2.90;
const logic = true;
const t = null;
const sys = Symbol();
console.log(typeof sys);

// REFERENCES TYPES

const arrT = ['França','Brasil','Inglaterra'];
console.log(arrT);
console.log(typeof arrT);

const companion = {
  option: 'value',
  option2: 'value2'
}

console.log(typeof companion)

const time = new Date();

console.log(time)
console.log(typeof time)

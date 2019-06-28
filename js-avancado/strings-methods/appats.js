// SIMPLE CONCATANATION

const firstName = 'Latrix';
const lastName = 'Mariana';
let phrase = "the world is about to end";

console.log("Your name is " + firstName + ' ' + lastName);

let appendValue;
// APPEND
appendValue = 'TEST';
appendValue += 'ING';

console.log(appendValue)

let escape;
// Escaping
escape = 'that\'s a big deal to carry on'
console.log(escape);
// concat
escape = firstName.concat('',lastName);
console.log("Thats how to concat: ",escape);

// UPPER AND LOWER

escape = firstName.toUpperCase();
console.log(escape);
escape = firstName.toLowerCase();
console.log(escape);

// indexOf

escape = firstName.indexOf('t');
console.log("index of ",escape);
escape = firstName.lastIndexOf('t');
console.log(escape);

escape = firstName.charAt(2);
console.log(escape);
escape = firstName.charAt(firstName.length);

// substring and slice
escape = firstName.substring(0,4);
console.log(escape);
escape = firstName.slice(-3);

console.log(escape);

// SPLIT

escape = phrase.split(' ');
console.log(escape);

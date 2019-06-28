"use strict"

var time = new Date(2019,2,11,10,25,10);
console.log(time);

  var d = new Date("2015-03-25T12:00:00-03:00");
 console.log(d);

var age = Math.floor(Math.random() * 30);
var name = 'Deck'

if (age > 0 && age < 14) {
  console.log(`${name} is a child and his age is ${age}`);
}else if (age >= 15 && age <= 19) {
  console.log(`${name} is a teenager and his age is ${age}`);
}else if (age >= 19 && age <= 30) {
  console.log(`${name} is an adult and his age is ${age}`);
}

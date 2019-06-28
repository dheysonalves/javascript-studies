const music = {
  name:'knoking on heavens door',
  band:'Guns n\'roses',
  address: {
    country:'EUA',
    city:'Seattle',
    neightboor:'Oxville town'
  },
  format:'mp3',
  size:78768,
  play:function() {
    return 'playing';
  }
}
let val;
val = music.address;
val = music.band;
val = music.play();
console.log(val);


const person = [
{name:'ok'},{name:'down'},{name:'down'}];

for(let i = 0;i < person.length;i++) {
  console.log(person[i].name);
}

let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];

console.log(journal[1].squirrel);

let objectA = {a:"a",b:"b"};
Object.assign(objectA,{c:"c",d:"d"});
console.log(objectA);

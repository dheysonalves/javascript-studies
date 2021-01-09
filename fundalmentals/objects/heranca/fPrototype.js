const animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; // Quando um novo objeto for criado, assine para animal

let rab = new Rabbit('Truck tricker');

console.log(rab.eats);

console.log(rab.constructor == Rabbit) // false, Quando sobreescrevemos, perdemos a referencia ao construtor

function Snake() {}

Snake.prototype = {
  constructor: Snake,
  jump: true
};

console.log(Snake.prototype.constructor == Snake)

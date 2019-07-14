let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // __proto__ e um getter/setter historico para [[Prototype]]

console.log(rabbit.jumps);
console.log(rabbit.eats);

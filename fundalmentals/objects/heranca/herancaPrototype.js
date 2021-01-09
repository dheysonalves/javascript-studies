let animal = {
    race: '',
    family: '',
    eats: true,
    talk() {
        console.log('Hey there!')
    },
    set info(value) {
        [this.race, this.family] = value.split(" ");
    },
    get info() {
        return `${this.race} + ${this.family}`;
    },
    doSomething() {

    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let rabbitSon = {
    run: true,
    __proto__: rabbit
}

// rabbit.__proto__ = animal; __proto__ e um getter/setter historico para [[Prototype]]

rabbit.talk(); // Hey There
console.log(rabbitSon.jumps); // true 
console.log(rabbit.eats); // true
console.log(typeof Object.prototype); // object
console.log(typeof rabbit.__proto__); // object

rabbit.info = 'Puddle Mamifero';
console.log(rabbit.info);

rabbit.doSomething = function () {
    console.log('Rabbit, just sniff your nose!')
}

rabbit.doSomething(); // Chama o metodo

animal.doSomething();

console.log(typeof null);

console.log(typeof Object);

/* 
THIS nao e afetado pelos prototipos!

Isso é realmente uma coisa super importante, porque podemos ter um grande objeto com muitos métodos e herdar dele. Então, os objetos herdados podem executar seus métodos e modificarão o estado desses objetos, não o grande.
*/
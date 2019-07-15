let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

console.log(rabbit.eat()); // true

animal.eat()

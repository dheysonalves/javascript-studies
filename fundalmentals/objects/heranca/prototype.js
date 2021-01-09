let carro = {
    velCarro: 0,
    velMax: 0,
    acelerarMais(delta) {
         if (this.velCarro + delta <= this.velMax) {
             this.velCarro += delta;
         }else {
             this.velAtual = this.velMax;
         }
    },
    status() {
        return `${this.velCarro} ate ${this.velMax}`
    }
}

let volvo = {
    modelo: 'FX900',
    velMax: 180,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

let ford = {
    modelo: 'GT9500',
    velMax: 230,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro);

console.log(volvo);
volvo.acelerarMais(100);
volvo.acelerarMais(30);
console.log(volvo.status());

Object.setPrototypeOf(ford, carro);
console.log(ford);
ford.acelerarMais(20);
console.log(ford.status())
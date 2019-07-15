let carro = {
    velCarro: 0,
    velMax: 0,
    acelerarMais(delta) {
         if (this.velAtual + delta <= this.velMax) {
             this.velAtual += delta;
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
    velMax: 100,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro);

console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status())
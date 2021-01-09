// exercise - example

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());


// code-blocks if

let palavra = 'Casa'

if (true) {
    let usuario = 'Kane'

    console.log(`${palavra}, ${usuario}`)
    
}

console.log(usuario) // não existe

// code-blocks for, while

for (let k = 0; k < 10; k++) {
    // Cada loop tem seu proprio ambiente lexico
}
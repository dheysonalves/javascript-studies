let i = 0;
while (i < 3) { // 0 1 2
    console.log(i);
    i++;
}

/*
Qualquer expressao ou variavel pode estar em uma condicao de repeticao,
nao apenas comparacoes: A condicao e avaliada e convertida para um boleano por while.
Logo, 0 = false e numeros > 0 = true
*/
let u = 3;
while (u) { // 3 2 1
    console.log(u); 
    u--;
}

/*
Do while, e recomendado, quando se quer executar o bloco
pelo menos uma vez, mesmo que o while seja false
*/

let t = 0;

do { // 0 1 2
  console.log(t);
  t++;
} while (t < 3);

let o = 0;

for (o = 2; o <= 10; o += 2) {
    console.log(o);
}

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let k = 0;
while (k < 3) {
    console.log(`number ${k}!`);
    k++;
}

// for (let j = 0; j < 5; i++) {
  
//     let input = prompt('Digite um numero maior que 100,' 0);
    
//     if (!input) break;
// }

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = prompt('Digite o numero', 0);
for (let x = 2; x < n; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

/* let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
} */
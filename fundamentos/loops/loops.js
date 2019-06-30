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

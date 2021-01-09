// CONVERTIONS timeout

let oko;
// STRING CONVERTION
oko = String(2);
console.log('variavel:', oko);
console.log('Tamanho da variavel:', oko.length);

oko = true;
console.log('Variavel booleana:',oko);
console.log('Tamanho da variavel booleana:',oko.length);

// toString Convertions
oko = (2).toString();
console.log('Conversao por toString:',oko);

// Number Convertions

oko = Number('2');
console.log('Variavel String convertida:',oko);
console.log('Decimal adicional:',oko.toFixed(2));

// PARSE

oko = parseInt('100.30');
console.log('ParseInt way:',oko)
oko = parseFloat('100.30');
console.log('ParseFloat way:',oko);
console.log('ParseFloat way length:',oko.length);

const var1 = String(5);
const var2 = 6;
const sum = Number(var1 + var2);
console.log('Contatenação de num ' + var1 + ' e ' +var2 +' Resultando em:',sum);

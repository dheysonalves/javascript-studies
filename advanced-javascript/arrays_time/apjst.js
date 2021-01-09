var arrIn = ['teste1','teste2'];
console.log(arrIn.length);

console.log(arrIn[1]);
console.log(arrIn[arrIn.length - 1]);

// itera pelo forEach
arrIn.forEach(function(item,index,array){
  console.log(item,index)
});

// adiciona um item
var add = arrIn.push('time');
console.log(arrIn);

// remove a ultima posicao
var rmv = arrIn.pop();
console.log(arrIn);

//remove a primeira posicao
var first = arrIn.shift();
console.log(arrIn);

// adiciona na primeira posicao
var addShift = arrIn.unshift('novotest');
console.log(arrIn);

// revela a posicao do item
var pos = arrIn.indexOf('teste2');
console.log(pos);

// remove um item especifico
//resulta em uma atualizacao do length
var removedItem = arrIn.splice(pos,1);
//splic(pos,n)
/*
n define o numero de items
pos define o ponto inicial
*/
console.log(arrIn);

console.log(arrIn['1'] != arrIn['01']);

const pai = {
    nome: 'Carlos',
    cor_cabelo: 'Preto'
};

const filha1 = Object.create(pai);
filha1.nome = 'Bia';

console.log(filha1.nome);

const filha2 = Object.create(pai, {
    nome: { value: 'Joana', writable: false, enumerable: true}
});

filha2.nome = 'Juliana'
console.log(filha2.nome);

for (const key in filha2) {
    if (filha2.hasOwnProperty(key)) {
        console.log(`O valor e ${key}`); // Our: nome
    } else {
        console.log(`O valor e ${key}`); // Inherited: cor_cabelo
    }
}

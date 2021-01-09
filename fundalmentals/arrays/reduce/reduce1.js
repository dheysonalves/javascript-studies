const alunos = [
    { nome: 'Cassia', nota: 4.3, bolsista: true},
    { nome: 'Guilherme', nota: 7.5, bolsista: false},
    { nome: 'Ana', nota: 6.5, bolsista: true},
    { nome: 'Pedro', nota: 2.1, bolsista: false},
    { nome: 'Maria', nota: 9.0, bolsista: true}
]

const result = alunos.map(e => e.bolsista).

console.log(result)
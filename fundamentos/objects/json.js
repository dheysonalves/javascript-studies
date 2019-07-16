const obj = {
    nome: 'Ana',
    idade: 32,
    profissao: 'Emfermeira'
}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"nome": "Julio", "idade": 32, "Profissao": "Emfermeirar"}'))
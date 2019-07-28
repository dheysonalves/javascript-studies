const fs = require('fs')

const produto = {
    nome: "Laranja",
    quantidade: 2000,
    preco: 0.80
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo gerado')    
})
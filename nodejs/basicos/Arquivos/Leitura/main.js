const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono

fs.readFile(caminho, 'utf-8', (err, caminho) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json.js')
console.log(config)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})
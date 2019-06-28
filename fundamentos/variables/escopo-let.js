var numero = 1 
{
    let numero = 2
    console.log('dentro =', numero) // caso nao exista no escopo menor, ele busca no escopo maior
}
console.log('fora = ', numero)
function tratarErroLancar (erro) {
    // throw 10
    // throw true
    // throw 'mensagem'
   throw new Error('...'); 
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!'); 
    } catch (error) {
        tratarErroLancar(error);
    } finally {
        console.log('final');
    }
    
}

const obj = { name: 'John'}
imprimirNomeGritado(obj);
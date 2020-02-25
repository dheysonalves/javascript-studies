var xhttp = new XMLHttpRequest();

// acesso entre domínios
/*
    Por razões de segurança,
    a página web e o XML que está tentando carregar,
    devem estar no MESMO SERVIDOR
*/

// Criando para versões antigas do IE(5/6)

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// XMLHttpRequest Object methods

xhttp.abort(); // cancela a requisição atual
xhttp.getAllResponseHeaders(); // retorna a informação do cabeçalho
xhttp.getResponseHeader(); // retorna uma informação específica do cabeçalho

xhttp.open(method, url, async, user, psw); // especifica uma requisição
xhttp.send(); // envia uma requisição ao servidor | usado em GET requests
xhttp.send(string); // envia uma requisição ao servidor | usado em POST requests
xhttp.setRequestHeader(); // adiciona um valor ao cabeçalho para ser enviado
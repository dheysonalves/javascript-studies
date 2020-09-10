---
description: >-
  O HTTP (Hyper text transfer protocol) é um protocolo de transferência de dados
  na web entre servidores distribuídos.
---

# HTTP: As partes necessárias

     O HTTP \(Hyper text transfer protocol\) é um protocolo de transferência de dados na web entre servidores distribuídos.Ele faz parte da pilha de protocolos TCP/IP. Onde permite a comunicação entre hosts e clientes.   


### URL'S

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-url-structure.png)

Nós temos as URL's que nos informam detalhes das páginas e como elas estão sendo servidas. A sub-string protocolo determina qual está sendo utilizando, seja http ou https, para comunicações seguras. O **host**, com o **domain name** _****_da página servida, que converte seu endereço IP\(Internet protocol\) para um nome de domínio. A **porta**, que identifica qual interface será utilizada na conexão, sendo a 80 padrão para o HTTP. O **caminho absoluto** que identifica onde está servido o arquivo no servidor. A query, que informa as condições para extração dos dados.

Essas informações determinam um traço de comunicação entre servidor e cliente.

### Verbos

Os verbos de requisição nos informam ações que o host irá realizar.

* GET: Acessa um recurso disponível.
* POST: Cria um novo recurso.
* PUT: Atualiza um novo recurso.
* DELETE: Deleta um novo recurso.

### Status Code

O servidor retorna uma resposta, cada uma com uma informação específica.

1xx: Mensagens informativas

Informa ao cliente para continuar enviando as mensagens de requisição.

```text
Expect:100-continue
```

2xx: Mensagens de Sucesso

Informa ao cliente que ocorreu uma mensagem de sucesso. **200 OK** é uma das mensagens padrões. 

3xx: Redirecionamento

Pede para o cliente realizar uma nova ação. Busca por uma outra URL para realizar o fetch da requisição.

4xx: Erro do cliente

Informa que o cliente realizou uma requisição de um recurso inexistente. O código **404 NOT FOUND**, informa que o recurso não foi encontrado.

5xx: Erro do servidor 

Informa que ocorreu um erro de processamento ao realizar uma requisição do servidor.

![](../.gitbook/assets/image.png)






import http, { type IncomingMessage, ServerResponse } from 'http'
import url from 'url'

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    const reqUrl = url.parse(request?.url || '', true)
    
    if(request.method === 'GET'){
        console.log(reqUrl.query)
        // pegar os parametros e realizar uma soma

        // http://localhost:9090?num1=10&num2=20
        const num1 = Number(reqUrl.query?.num1);
        const num2 = Number(reqUrl.query?.num2);
        const resultado = num1 + num2;

        response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
        response.write("O resultado é "+ resultado);
    }

    response.end();
})

server.listen(9090, () => {
    console.log("Iniciando servidor na porta 9090")
})
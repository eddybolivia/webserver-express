const http = require('http');

http.createServer((req, res) => {
        // res.write('Hola mundo');
        res.writeHead(200, { 'content-type': 'application/json' })
        const salida = {
            nombre: 'Eduardo',
            edad: 48,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');
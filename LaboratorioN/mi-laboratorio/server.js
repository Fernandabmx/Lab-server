const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 8080; 

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  const respuesta = {
    nombre: 'Maria Fernanda Sanabria',
    mensaje: 'Este es mi servidor'
  };
  const respuestaJSON = JSON.stringify(respuesta);
  res.end(respuestaJSON);
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
});

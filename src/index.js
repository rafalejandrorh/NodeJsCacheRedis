const express = require('express');
const responseTime = require('response-time');
const rickAndMorty = require('./routes/rickAndMorty');

const app = express();
const port = 3000;

// Middleware para mostrar en el header del response
// el tiempo de respuesta
app.use(responseTime());

app.use(rickAndMorty);

app.listen(port);
console.log(`Server running on http://localhost:${port}`)
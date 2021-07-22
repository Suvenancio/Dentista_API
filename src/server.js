const express = require('express');
const app = express();
const port = 3020;
const BodyParser = require('body-parser');
const rotasDentista = require('./controller/dentistacontroller');
const Dentista = require('./model/dentistamodels')
const sqLite = require('sqlite3').verbose();
const bd = new sqLite.Database('bd');

app.use(BodyParser.json())

Dentista(app)

app.listen(port, () => {console.log(`3020`)})
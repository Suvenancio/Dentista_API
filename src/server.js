const express = require('express');
const app = express();
const port = process.env.PORT;
const bd = require('./infra/sql_db')
const cors = require('cors')
const rotaDentista = require('./controllers/dentistacontroler')

app.use(express.json())

rotaDentista(app,bd)


app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))
const express = require('express');
const bodyParser = require('body-parser')
const rescue = require('express-rescue');
const cors = require('cors');
const  criaUsuario  = require('./controller/criaUsuario')
const { validaEmail, validaSenha, validaUsuario } = require('./middlewares/validaUsuario');
const { validaLogin } = require('./middlewares/validaLogin');
const { criaToken, decodeToken } = require('./controller/tokens');
const  retornaUsuario  = require('./controller/retornaUsuario')

const app = express();
app.use(bodyParser.json())

const PORT = process.env.PORT || 3100;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
})

app.post('/registro', validaEmail, validaSenha, validaUsuario, criaUsuario );

app.post('/login', validaSenha, validaLogin, criaToken, retornaUsuario);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
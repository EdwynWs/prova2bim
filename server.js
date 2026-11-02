//importando os packages instalados
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const homeRota = require('./routes/homeRoute');
const filmeRota = require('./routes/filmeRoute');

const salaRoute = require('./routes/salaRoute');
const usuarioRota = require("./routes/usuarioRoute");
const loginRota = require('./routes/loginRoute');
const cartazRota = require("./routes/cartazRoute");
const sessaoRota = require("./routes/sessaoRoute");
const AuthMiddleware = require('./middlewares/authMiddleware');
const cookieParser = require('cookie-parser');

const app = express();

//configurando a nossa pasta public como o nosso repositorio de arquivos estáticos (css, js, imagens)
app.use(express.static(__dirname + "/public"))
//configuração das nossas views para utilizar a ferramenta EJS
app.set('view engine', 'ejs');
//Configuração de onde ficará nossas views
app.set('views', './views');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração da nossa página de layout
app.set('layout', './layout');
app.use(expressLayouts);
app.use(cookieParser());

//definindo as rotas que o nosso sistema vai reconhecer através da url do navegador

app.use('/login', loginRota);

app.use('/', cartazRota);

let auth = new AuthMiddleware();

app.use(auth.verificarUsuarioLogado);

app.use('/admin', homeRota)

app.use('/admin/filmes', filmeRota);

app.use('/admin/salas', salaRoute);

app.use('/admin/usuarios', usuarioRota);

app.use('/admin/sessao', sessaoRota);




//ponto de inicio do nosso servidor web
const server = app.listen('5001', function() {
    console.log('Servidor web iniciado');
});

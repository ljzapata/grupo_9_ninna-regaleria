const express = require('express');
const session = require('express-session');
const methodOverride =  require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const main = require('./routes/main');
const mainLogin = require('./routes/users');
const mainProduct = require('./routes/product');

const productsAPI = require('./routes/api/products');
const usersAPI = require('./routes/api/users');

const { cookie } = require('express-validator');

const rememberMiddleware = require('./middlewares/rememberMiddleware');

const app = express();

const  userLogedMiddleware = require('./middlewares/userLogedMiddleware');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "SECRET" }));
app.use(methodOverride('_method'));
app.use(session({ 
    secret: process.env.SECRET 
}));
app.use(cookie());
app.use(cookieParser());
app.use(rememberMiddleware);
app.use(userLogedMiddleware);
app.use(cors())

app.use('/', main);
app.use('/', mainLogin);
app.use('/', mainProduct);

app.use('/api/products', productsAPI);
app.use('/api/users', usersAPI);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
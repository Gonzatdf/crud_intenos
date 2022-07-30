
const express = require('express');
const app = express();
const methodOverride= require('method-override');
const router = require('./router/mainRouter');

const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));



app.use('/products', router);


app.listen(PORT, console.log('corriendo en el '+PORT));




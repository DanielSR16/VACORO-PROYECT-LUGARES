const express =  require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();
const app =  express();
app.use(bodyParser.json());


//coneccion a db
require('./db/connection');

const municipioRouter = require('./routes/municipioRouter');
const estadoRouter = require('./routes/estadoRouter');
const mainRouter = require('./routes/main');


app.use('/municipio',municipioRouter);
app.use('/estado',estadoRouter)
app.use('/', mainRouter);


app.listen(3002,()=>{
    console.log('servidor corriendo en el puerto 3002')
})
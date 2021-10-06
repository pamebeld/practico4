const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./connection');

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false }));
app.use(cors());


//Routes
app.use(require('./routes/alumno.routes'));

//Settings (PORT)
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), ()=> console.log(`Server run on port ${app.get('port')}`));

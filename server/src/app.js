const express = require('express');
const index = require('./rutas/index'); 
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
// require('dotenv').config();

const {mongoose} = require('./dataBase')

const app = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({extended: false,  limit: '50mb' }))

app.use(morgan("dev"))
app.use(cors())
app.use("/",index)



module.exports = app ;
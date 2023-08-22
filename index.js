const server = require('./src/server');
require('dotenv').config();
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
    .then(()=>{
        console.log('db Connected')
        server.listen(3000, ()=>{
            console.log('Servidor escuchando en puerto 3000');
        })
    })
    .catch(( e )=>{
        console.log(e)
    })


const express = require('express');
const dotenv  = require('dotenv');
const colors  = require('colors');
const bootcampRoutes  = require('./routes/BootcampRoutes');
const userRoutes  = require('./routes/UserRoutes');

// Establecer el archivo de Configuración Con Variables de entorno del Proyecto
dotenv.config({
    path: './config_env/config.env'
})

// 1- Crear el objeto App 
const app = express();

//
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , userRoutes)

// 3- Ejecutar el servidor de desarrollo de Express 
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${process.env.PORT}`.bgMagenta);
});
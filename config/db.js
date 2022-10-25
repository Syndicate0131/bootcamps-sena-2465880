const sequelize = require('./seq')
// Dependencia a la funcion para crear Modelo
const UserModel = require('../models/user')
// Dependencia a DataTypes
const {DataTypes} = require('sequelize')

// Crear El Modelo
const User = UserModel(sequelize,DataTypes)

//Crear función asyncrona para la conexión
const connectDB = async() =>{
    try {
        await sequelize.authenticate() 
        console.log('La conexión establecida correctamente');
        // Seleccionar los users:
        const users = await User.findAll();
        console.log(users);
        //Crear un usuario
        const userc = await User.create({ name: "Cristian", email: "crisbui@misena.edu.co", password: "qwert" });
    } catch (error) {
        console.error(error);
    }
}

// Ejecutar la Conexión
connectDB()
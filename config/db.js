const sequelize = require('./seq')
const colors  = require('colors');
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
        console.log('La conexión establecida correctamente'.bgMagenta);
        // // Seleccionar los users:
        // const users = await User.findAll();
        // console.log(users);
        // //Crear un usuario
        //     const userc = await User.create({ name: "Cristian", email: "crisbui@misena.edu.co", password: "qwert" });
        // //Actializar Usuario
        // await User.update({ name: "Buitrago" }, {
        //     where: {
        //       name: "Cristian"
        //     }
        //   });
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB
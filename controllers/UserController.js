// Objeto de Conexión
const sequelize = require('../config/seq')

// DataTypes 
const { DataTypes } = require ('sequelize')

// Modelo A Trabajar 
const UserModel = require ('../models/user')

// Crear el objeto Usuario 
const User = UserModel(sequelize, DataTypes)


// Get: Obtener datos -  Read
exports.traerUsers = async(req, res)=>{
    const users = await User.findAll();
    res.status(200).json(
        {
            "success" : true,
            "data" : users
        }
    )
}

// Obtener recurso por id
exports.traerUsersPorId = async(req, res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success" : true,
            "data" : userId
        }
    )
}

// Post: Crear un nuevo recurso - Create 
exports.crearUser = async(req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json({
        "success" : true,
        "data" : newUser
    })
}

//Put - Patch : Actualiza un recurso - Update
exports.actualizarUser = async(req, res)=>{
    // Actualizar Usuario Por Id
    await User.update(req.body,{
    where:{
        id: req.params.id
        }
    });
    // Consultar Datos Actualizados
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "success" : true,
            "data" : upUser

        }
    )
}

//Delete : Elimina un recurso - Delete
exports.borrarUser = (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a Eliminar el user ${req.params.id}`
        }
    )
}

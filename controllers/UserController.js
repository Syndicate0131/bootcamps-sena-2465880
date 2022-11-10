// Objeto de Conexión
const sequelize = require('../config/seq')

// DataTypes 
const { DataTypes , ValidationError } = require ('sequelize')

// Modelo A Trabajar 
const UserModel = require ('../models/user')

// Crear el objeto Usuario 
const User = UserModel(sequelize, DataTypes)


// Get: Obtener datos -  Read
exports.traerUsers = async(req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "success" : true,
                "data" : users
            }
        )        
    } catch (error) {
        //Errores de Servidor
        res
        .status(500)
        .json({
            "success":false,
            "errors": "Error del Servidor"
        })  
    }

}

// Obtener recurso por id
exports.traerUsersPorId = async(req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //Si el usuario no existe
        if (!userId) {
            res.status(422).json(
                {
                    "success" : false,
                    "data" : [
                        "Usuario no Existe"
                    ]
                }
            )     
        }else{
        res.status(200).json(
            {
                "success" : true,
                "data" : userId
            }
        )   
        }
    } catch (error) {
        //Errores de Servidor
        res
        .status(500)
        .json({
            "success":false,
            "errors": "Error del Servidor"
        })  
    }
}

// Post: Crear un nuevo recurso - Create 
exports.crearUser = async(req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            "success" : true,
            "data" : newUser
        })
    } catch (error) {
        if(error instanceof ValidationError){
            //Mensajes de Errores
            const errores = error.errors.map((e)=> e.message )
            // Llevar errores al response 
            res
            .status(422)
            .json({
                "success":false,
                "errors": errores
            })
        }else{
            //Errores de Servidor
            res
            .status(500)
            .json({
                "success":false,
                "errors": "Error del Servidor"
            })
        }
    }   
}

//Put - Patch : Actualiza un recurso - Update
exports.actualizarUser = async(req, res)=>{
    try {
        // Consultar Datos Actualizados
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            res.status(422).json(
                {
                    "success" : false,
                    "data" : [
                        "Usuario no Existe"
                    ]
                }
            )     
        }else{
            // Actualizar Usuario Por Id
            await User.update(req.body,{
            where:{
                id: req.params.id
                }
            });
            const upAct = await User.findByPk(req.params.id)
        res.status(200).json(
            {
                "success" : true,
                "data" : upAct
    
            }
        )
        }
    } catch (error) {
        if(error instanceof ValidationError){
            //Mensajes de Errores
            const errores = error.errors.map((e)=> e.message )
            // Llevar errores al response 
            res
            .status(422)
            .json({
                "success":false,
                "errors": errores
            })
        }else{
            //Errores de Servidor
            res
            .status(500)
            .json({
                "success":false,
                "errors": "Error del Servidor"
            })
        }
    }

}

//Delete : Elimina un recurso - Delete
exports.borrarUser = async(req, res)=>{
    try {
        // Consultar Datos A Eliminar
        const u = await User.findByPk(req.params.id)
        if (!u) {
            res.status(422).json(
                {
                    "success" : false,
                    "data" : [
                        "Usuario no Existe"
                    ]
                }
            )     
        }else{
        // Buscar al usuario
        const u = await User.findByPk(req.params.id)
        // -Borrar usuario por id
        await User.destroy({
        where: {
          id: req.params.id
        }
        });
        res.status(200).json(
            {
                "success" : true,
                "data" : u
            }
        )
              }
    } catch (error) {
        //Errores de Servidor
        res
        .status(500)
        .json({
            "success":false,
            "errors": "Error del Servidor"
        })  
    }              
}

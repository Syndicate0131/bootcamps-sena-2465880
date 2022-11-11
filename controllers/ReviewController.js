// Objeto de Conexión
const sequelize = require('../config/seq')

// DataTypes 
const { DataTypes , ValidationError } = require ('sequelize')

// Modelo A Trabajar 
const ReviewModel = require ('../models/reviews')

// Crear el objeto Review 
const Review = ReviewModel(sequelize, DataTypes)


// Get: Obtener datos -  Read
exports.traerReviews = async(req, res)=>{
    try {
        const reviews = await Review.findAll();
        res.status(200).json(
            {
                "success" : true,
                "data" : reviews
            }
        )        
    } catch (error) {
        //Errores de Servidor
        res
        .status(500)
        .json({
            "success":false,
            "errors": error
        })  
    }

}

// Obtener recurso por id
exports.traerReviewsPorId = async(req, res)=>{
    try {
        const reviewId = await Review.findByPk(req.params.id)
        //Si el Review no existe
        if (!reviewId) {
            res.status(422).json(
                {
                    "success" : false,
                    "data" : [
                        "Review no Existe"
                    ]
                }
            )     
        }else{
        res.status(200).json(
            {
                "success" : true,
                "data" : reviewId
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
exports.crearReview = async(req, res)=>{
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json({
            "success" : true,
            "data" : newReview
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
exports.actualizarReview = async(req, res)=>{
    try {
        // Consultar Datos Actualizados
        const upReview = await Review.findByPk(req.params.id)
        if (!upReview) {
            res.status(422).json(
                {
                    "success" : false,
                    "data" : [
                        "Review no Existe"
                    ]
                }
            )     
        }else{
            // Actualizar Review Por Id
            await Review.update(req.body,{
            where:{
                id: req.params.id
                }
            });
            const upAct = await Review.findByPk(req.params.id)
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

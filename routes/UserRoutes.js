const express = require('express')

const router = express.Router()

// Crear rutas(endpoint, uri) para los users

// Get: Obtener datos -  Read
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Aqui se van a mostrar todos los users"
        }
    )
})

// Obtener recurso por id
 router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a mostrar el users cuyo id es ${req.params.id}`
        }
    )
})

// Post: Crear un nuevo recurso - Create 
router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "Aqui se van a crear un nuevo users"
    })
})

//Put - Patch : Actualiza un recurso - Update
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a actualizar el user ${req.params.id}`
        }
    )
})

//Delete : Elimina un recurso - Delete
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a Eliminar el user ${req.params.id}`
        }
    )
})

module.exports = router
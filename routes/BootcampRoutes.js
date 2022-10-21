const express = require('express')

const router = express.Router()

// Crear rutas(endpoint, uri) para los bootcamps

// Get: Obtener datos -  Read
router.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Aqui se van a mostrar todos los BootCamps"
        }
    )
})

// Obtener recurso por id
 router.get('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a mostrar el bootcaps cuyo id es ${req.params.id}`
        }
    )
})

// Post: Crear un nuevo recurso - Create 
router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "Aqui se van a crear un nuevo BootCamps"
    })
})

//Put - Patch : Actualiza un recurso - Update
router.put('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a actualizar el bootcamp ${req.params.id}`
        }
    )
})

//Delete : Elimina un recurso - Delete
router.delete('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message" : `Aqui se van a Eliminar el bootcamp ${req.params.id}`
        }
    )
})

module.exports = router
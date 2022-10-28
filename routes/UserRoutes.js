const express = require('express')
const {traerUsers,
    traerUsersPorId,
    crearUser,
    actualizarUser,
    borrarUser
} = require('../controllers/UserController')

const router = express.Router()

router.route('/')
            .get(traerUsers)
            .post(crearUser)

router.route('/:id')
            .get(traerUsersPorId)
            .put(actualizarUser)
            .delete(borrarUser)

module.exports = router
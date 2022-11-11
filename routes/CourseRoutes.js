const express = require('express')
const {traerCourses,
    traerCoursesPorId,
    crearCourse,
    actualizarCourse,
    borrarCourse
} = require('../controllers/CourseController')

const router = express.Router()

router.route('/')
             .get(traerCourses)
              .post(crearCourse)

router.route('/:id')
              .get(traerCoursesPorId)
              .put(actualizarCourse)
              .delete(borrarCourse)

module.exports = router
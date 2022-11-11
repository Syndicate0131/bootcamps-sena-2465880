const express = require('express')
const {traerReviews,
    traerReviewsPorId,
    crearReview,
    actualizarReview,
    borrarReview
} = require('../controllers/ReviewController')

const router = express.Router()

router.route('/')
            .get(traerReviews)
             .post(crearReview)

router.route('/:id')
             .get(traerReviewsPorId)
             .put(actualizarReview)

module.exports = router
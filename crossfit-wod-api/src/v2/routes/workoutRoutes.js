const express = require('express')
const router = express.Router()
const { verifyContentTypeJSON } = require('../../middlewares/verifyContentTypeMiddleware')
const workoutController = require('../controllers/workoutController')

router.get('/', workoutController.getAllWorkouts)
router.get('/:workoutId', workoutController.getOneWorkout)
router.post('/', 
    [ 
        verifyContentTypeJSON,
    ],
    workoutController.createNewWorkout
)
router.patch('/:workoutId', 
    [ 
        verifyContentTypeJSON,
    ], 
    workoutController.updateOneWorkout
)
router.delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router

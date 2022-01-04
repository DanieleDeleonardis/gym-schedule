const express = require('express');
const router = express.Router();
const multer = require('multer');
const ExerciseController = require('../controllers/ExerciseController');

//salvo immagini nel frontend 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/Dani corso/wa/react/gym-schedule/frontend/src/upload')
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + file.originalname)
    }
})

const upload = multer({storage});


//routes
router.post('/exercise/create', upload.single("exerciseImg"), ExerciseController.create)
router.get('/exercise/', ExerciseController.read)


module.exports = router

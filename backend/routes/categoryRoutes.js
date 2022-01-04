const express = require('express');
const router = express.Router();
const DayController = require('../controllers/DayController');


router.post('/day/create', DayController.create)
router.get('/day/', DayController.read)


module.exports = router

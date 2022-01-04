const ExerciseModel = require('../models/ExerciseModel');



exports.create = async (req, res) => {

    // res.status(200).json({file: req.file, body: req.body})

    const exercise = new ExerciseModel({
        name: req.body.name,
        weight: req.body.weight,
        repetitions: req.body.repetitions,
        // exerciseImg: req.file.filename,
        day: req.body.day

    });
    try {

        await exercise.save()
        res.status(201).json(exercise)

    } catch (error) {
        res.status(409).json({error:error.message})
    }
    
}


exports.read = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        //cerco l'utente tramite id
        const singleExerciseID = await ExerciseModel.findById(id)
        res.status(200).send(singleExerciseID)

    } else {
    const exercises = await ExerciseModel.find()
    res.status(200).send(exercises)
    
    }
}

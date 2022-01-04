const DayModel = require('../models/DayModel');


exports.create = async (req, res) => {
    //creazione di un utente
    //Creo un nuovo modello utente
    const day = new DayModel(req.body)
    try {

        if (req.body.parentId) {
            day.parentId = req.body.parentId;
        }

        await day.save()
        res.status(201).json(day)

    } catch (error) {
        res.status(409).json({error:error.message})
    }
    //salvo, così arriva la richiesta dagli input del form

}

exports.read = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        //cerco l'utente tramite id
        const singleDayID = await DayModel.findById(id)
        res.status(200).send(singleDayID)

    } else {
    const days = await DayModel.find()
    res.status(200).send(days)
    
    }
}
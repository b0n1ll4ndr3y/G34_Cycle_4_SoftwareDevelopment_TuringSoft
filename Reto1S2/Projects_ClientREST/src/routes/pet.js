const express = require('express')
const petSchema = require('../models/pet')
const router = express.Router()

router.post('/pets', (req, res) => {
    const pet = petSchema(req.body)
    pet
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/pets', (req, res) => {
    petSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/pets/:id', (req, res) => {
    const {id} = req.params
    petSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.put('/pets/:id', (req, res) => {
    const {id} = req.params
    const {name, animal_type, breed, date_born, gender, id_owner} = req.body
    petSchema
        .updateOne({_id: id}, {$set: {name, animal_type, breed, date_born, gender, id_owner}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.delete('/pets/:id', (req, res) => {
    const {id} = req.params
    petSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
})

module.exports = router
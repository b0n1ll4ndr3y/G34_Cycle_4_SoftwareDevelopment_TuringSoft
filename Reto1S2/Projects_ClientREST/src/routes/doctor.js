const express = require('express')
const doctorSchema = require('../models/doctor')
const router = express.Router()

router.post('/doctors', (req, res) => {
    const doctor = doctorSchema(req.body)
    doctor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/doctors', (req, res) => {
    doctorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/doctors/:id', (req, res) => {
    const {id} = req.params
    doctorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.put('/doctors/:id', (req, res) => {
    const {id} = req.params
    const {name, specialty, phone} = req.body
    doctorSchema
        .updateOne({_id: id}, {$set: {name, specialty, phone}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.delete('/doctors/:id', (req, res) => {
    const {id} = req.params
    doctorSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
})

module.exports = router
const express = require('express')
const veterinarySchema = require('../models/veterinary')
const router = express.Router()

router.post('/veterinaries', (req, res) => {
    const veterinary = veterinarySchema(req.body)
    veterinary
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/veterinaries', (req, res) => {
    veterinarySchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/veterinaries/:id', (req, res) => {
    const {id} = req.params
    veterinarySchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.put('/veterinaries/:id', (req, res) => {
    const {id} = req.params
    const {nit, name, address, phone, email, id_veterinary} = req.body
    veterinarySchema
        .updateOne({_id: id}, {$set: {nit, name, address, phone, email, id_veterinary}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.delete('/veterinaries/:id', (req, res) => {
    const {id} = req.params
    veterinarySchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
})

module.exports = router
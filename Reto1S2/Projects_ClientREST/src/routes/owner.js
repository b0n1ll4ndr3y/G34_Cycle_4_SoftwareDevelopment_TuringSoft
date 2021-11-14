const express = require('express');
const ownerSchema = require('../models/owner');
//const ownerSchema = require('../models/owner');
const router = express.Router()

router.post('/owners', (req, res)=>{
    const owner = ownerSchema(req.body)
    owner
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/owners', (req, res) => {
    ownerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.get('/owners/:id', (req, res) => {
    const {id} = req.params
    ownerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.put('/owners/:id', (req, res) => {
    const {id} = req.params
    const {name, document_type, document, phone, email} = req.body
    ownerSchema
        .updateOne({_id: id}, {$set: {name, document_type, document, phone, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}))
})

router.delete('/owners/:id', (req, res) => {
    const {id} = req.params
    ownerSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .cath((error) => res.json({message:error}))
})

module.exports = router
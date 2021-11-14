const mongoose = require('mongoose')
const veterinarySchema = mongoose.Schema({
    nit:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})
/*  Anestesiología veterinaria.
    la cardiología.
    Ciencias veterianrias.
    la cirugía.
    Dermatología.
    fisioterapia.
    Oftalmología veterinaria.
    neurología.
    Oncología.
    la ortopedia.*/

module.exports = mongoose.model('veterinary', veterinarySchema)
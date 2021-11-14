const mongoose = require('mongoose')
const doctorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    specialty:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    id_veterinary:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('doctor', doctorSchema)
const mongoose = require('mongoose')
const petSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    animal_type:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    date_born:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    id_owner:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('pet', petSchema)
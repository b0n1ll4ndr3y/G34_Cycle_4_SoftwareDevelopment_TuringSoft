const mongoose = require('mongoose')
const ownerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    document_type:{
        type: String,
        required: true
    },
    document:{
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

module.exports = mongoose.model('owner', ownerSchema)
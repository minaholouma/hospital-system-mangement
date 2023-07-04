const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({

    name:{
        type: String,
        unique:true, 
        enum: ["patient", "admin"],
        required: true,

    },
})

module.exports = mongoose.model('role', roleSchema)
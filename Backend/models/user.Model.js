const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        default: 'abc',
    },
    email: {
        type: String,
        default: 'admin@gmail.com',
        required: true,
        unique: true
    },
    birthOfDate: {
        type: Date,
    },
    address: {
        type: String,
        default: 'assiut - alazya',
    },
    photos: [{
        name: String
    }],
    isActive: {
        type: Boolean,
        default: true,

    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    token:{
        type:String
    }

})

module.exports = mongoose.model('user', usersSchema)
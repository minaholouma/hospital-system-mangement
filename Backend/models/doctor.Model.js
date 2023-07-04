const mongoose = require('mongoose')
Schema = mongoose.Schema;
servicesSchema = new Schema({
    name : String ,
    price: Number,
    description:String,
    icon:String
})
service = mongoose.model('services',servicesSchema);
module.exports = service;



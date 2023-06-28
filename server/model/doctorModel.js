const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image:{
    type: String
  },
  name:String,
  title: String,
  about:String,
  rate: String,
  views: String,
  clinicName: String,
  location: String,
  waitingTime: String,
  price: String,
  phone: String
});
module.exports = mongoose.model("Doctors", doctorSchema);

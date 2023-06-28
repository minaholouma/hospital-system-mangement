const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  image:String,
  name:String,
  price: String
});
module.exports = mongoose.model("Treatments", treatmentSchema);
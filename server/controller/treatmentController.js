const treatmentSchema = require("./../model/treatmentModel");
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
exports.getAllTreatments = (request, response, next) => {
  treatmentSchema
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getTreatmentById = (request, response, next) => {
  treatmentSchema
    .find({ _id: new ObjectId(request.params.id) })
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.searchTreatment = (request, response, next) => {
  const name = request.query.name ?? ''
  const price = request.query.price ?? ''
  let regexPrice;
  if (price.length != 0) {
    regexPrice = new RegExp('^' + price + ' LE', 'i') // i for case insensitive
  }
  else {
    regexPrice = '.*'
  }
  treatmentSchema.find({
    $and: [
      { 'name': { '$regex': '.*' + name + '.*' } },
      { 'price': { '$regex': regexPrice } },
    ]
  }).then((data) => {
    response.status(200).json(data);
  })
    .catch((error) => next(error));

};
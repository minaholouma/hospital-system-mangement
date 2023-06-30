const treatmentSchema = require("./../model/treatmentModel");
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
exports.getAllTreatments = async (request, response, next) => {
  treatmentSchema
  let { page, limit } = request.query;
  if (!page) { page = 1; }
  if (!limit) { limit = 10; }
  const skip = (page - 1) * limit;
  const listOfTreatment = await treatmentSchema.find({}).skip(skip).limit(limit)

    .then((data) => {
      const all = treatmentSchema.count(); //look
      const totalPages = Math.ceil(all / parseInt(limit));
      response.status(200).json(data, totalPages, page, limit);


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
exports.treatmentSchema = (request, response, next) => {
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
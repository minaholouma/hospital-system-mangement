const doctorSchema = require("./../model/doctorModel");
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
exports.getAllDoctors = (request, response, next) => {
  doctorSchema
    .find({})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getDoctorById = (request, response, next) => {
  doctorSchema
    .find({ _id: new ObjectId(request.params.id) })
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.searchDoctor = (request, response, next) => {
  const name = request.query.name ?? ''
  const title = request.query.title ?? ''
  const price = request.query.price ?? ''

  doctorSchema.find({
    $and: [
      { 'name': { '$regex': '.*' + name + '.*' } },
      { 'title': { '$regex': '.*' + title + '.*' } },
      { 'price': { '$regex': '.*' + price + '.*' } },
    ]
  }).then((data) => {
    response.status(200).json(data);
  })
    .catch((error) => next(error));

};

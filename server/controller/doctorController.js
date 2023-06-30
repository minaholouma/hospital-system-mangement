const doctorSchema = require("./../model/doctorModel");
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
exports.getAllDoctors = async (request, response, next) => {

  let { page, limit } = request.query;
  if (!page) { page = 1; }
  if (!limit) { limit = 10; }
  const skip = (page - 1) * limit;
  const listOfDoctors = await doctorSchema.find({}).skip(skip).limit(limit)
    .then((data) => {

      const all = doctorSchema.count(); //look
      const totalPages = Math.ceil(all / parseInt(limit));
      response.status(200).json(data, totalPages, page, limit);
    }).catch((error) => next(error));
  return listOfDoctors
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

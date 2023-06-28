const express = require("express");
const treatmentController = require("./../controller/treatmentController")
const router=express.Router();


router.route("")
       .get(treatmentController.getAllTreatments)

       router.get('/search',treatmentController.searchTreatment)
       router.get('/:id',treatmentController.getTreatmentById)

module.exports = router;
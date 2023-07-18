const express = require("express");
const doctorController = require("./../controllers/doctor.controller")
const router = express.Router();


router.route("").get(doctorController.getAllDoctors)

router.get('/search', doctorController.searchDoctor)
router.get('/:id', doctorController.getDoctorById)

module.exports = router;
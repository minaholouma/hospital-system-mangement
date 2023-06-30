const express = require("express");
const doctorController = require("./../controller/doctorController")
const router = express.Router();


router.route("").get(doctorController.getAllDoctors)

router.get('/search', doctorController.searchDoctor)
router.get('/:id', doctorController.getDoctorById)

module.exports = router;
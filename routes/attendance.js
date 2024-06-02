const express = require("express")
const router = new express.Router()
const attendanceController = require("../controllers/AttendanceController")
router.get("/", attendanceController.buildManagment)

module.exports = router
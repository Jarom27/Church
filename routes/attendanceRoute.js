const express = require("express")
const router = new express.Router()
const attendanceController = require("../controllers/attendanceController")
router.get("/attendance",attendanceController.buildManagement)

module.exports = router
const express = require("express")
const router = new express.Router()
const attendanceController = require("../controllers/attendanceController")
router.get("/attendance", attendanceController.buildManagement)
router.get("/attendance/:attendance_id", attendanceController.buildUpdateAttendanceForm)
router.post("/attendance/update/:attendance_id",attendanceController.updateAttendance)
module.exports = router
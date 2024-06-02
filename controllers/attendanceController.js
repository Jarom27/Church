const attendanceController = {}
const attendanceModel = require("../models/attendanceModel")
const utilities = require("../utilities/")
attendanceController.buildManagement = async function (req, res, next) {
    const data = await attendanceModel.getAllAsistances()
    const attendance = await utilities.buildAttendanceTable(data)
    res.render("attendance/management", {
        title: "Asistencias",
        attendance
    })
}
module.exports = attendanceController
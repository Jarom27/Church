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
attendanceController.buildUpdateAttendanceForm = async function (req, res, next) {
    res.render("attendance/update", {
        title: "Editar Asistencia"
    })
}
module.exports = attendanceController
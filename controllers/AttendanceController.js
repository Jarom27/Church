const utilities = require("../utilities/")
const attendanceModel = require("../models/AttendanceModel")
const attendanceCont = {}


attendanceCont.buildManagment = async function (req, res, next) {
    const data = await attendanceModel.getAttendances()
    const table = await utilities.buildAttendanceTable(data)
    res.render("attendance/managment", { title: "Managment", table })
}
module.exports = attendanceCont
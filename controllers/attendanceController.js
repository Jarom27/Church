const attendanceController = {}
attendanceController.buildManagement  = async function(req, res, next){
    res.render("attendance/management",{
        title: "Asistencias"
    })
}
module.exports = attendanceController
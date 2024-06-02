const Util = {}

Util.buildAttendanceTable = async function (data) {
    let table = ""
    if (data.length > 0) {
        data.rows.forEach(row => {
            table += `
            <tr>
                <td>${row.attendance_date}</td>
                <td>${row.attendance_ward_people}</td>
                <td>${row.attendance_foreign_people}</td>
            </tr>`
        })
    }
    else {
        table = "Lo sentimos, no hay asistencias"
    }
    return table

}
module.exports = Util
const pool = require("../database/")
const attendanceModel = {}

attendanceModel.getAllAsistances = async function () {
    const sql = "SELECT * FROM attendance"
    const data = await pool.execute(sql)
    console.log(data)
    return data
}

module.exports = attendanceModel
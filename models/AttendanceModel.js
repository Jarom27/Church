const pool = require("../database/")

async function getAttendances() {
    try {
        const sql = "SELECT * FROM attendance "
        const result = await pool.query(sql)
        return result;
    } catch (err) {
        console.error("Error in query: " + err)
    }
}
module.exports = { getAttendances }
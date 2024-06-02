const mysql = require("mysql2/promise")

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})
const pool = {}
pool.execute = async function (sql, parameters = null) {
    const query = connection.execute(sql, parameters)
    return query
}

module.exports = pool
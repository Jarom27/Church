const mysql = require("mysql2/promise")
require("dotenv").config()

let pool
if (process.env.NODE_ENV == "development") {
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
    module.exports = {
        query(text, params) {
            try {
                let res
                pool.query(text, params, (err, results) => {
                    res = results
                })
                console.log("executed query", { text })
                console.log(res)
                return res
            } catch (error) {
                console.error("error in query", { text })
                throw error
            }
        },
    }
}
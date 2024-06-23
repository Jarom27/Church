const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const attendanceRoute = require("./routes/attendanceRoute")
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
app.use(bodyParser)
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")
app.use(static)

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    })
})
app.use(attendanceRoute)

app.use(async (req, res, next) => {
    next({ status: 404, message: "No existe tal pagina" })
})
app.use(async (err, req, res, next) => {
    console.error(`Error at: ${req.originalUrl} : ${err.message}`)
    if (err.status == 404) { message = err.message } else { message = 'Oh no! There was a crash. Maybe try a different route?' }

    res.render("errors/error", {
        title: err.status || 'Server Error',
        message
    })
})
const port = process.env.PORT
const host = process.env.HOST
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
})

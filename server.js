const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const expressLayouts = require("express-ejs-layouts")
const attendanceRoute = require("./routes/attendance")
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")
app.use(static)

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    })
})
app.use("/attendance", attendanceRoute)


app.use(async function (req, res, next) {
    next({ status: 404, message: "Lo sentimos! El sitio no existe" })
})

app.use(async function (err, req, res, next) {
    console.error(`Error at ${req.originalUrl}: ${err.message}`)

    if (err.status == 404) { message = err.message } else { message = 'Oh no! Hubo un problema. Intente con otra ruta' }

    res.render("errors/error", {
        title: err.status || "Server error",
        message
    })
})
const port = process.env.PORT
const host = process.env.HOST
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
})

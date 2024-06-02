const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const attendanceRoute = require("./routes/attendanceRoute")
const expressLayouts = require("express-ejs-layouts")

app.set("view engine","ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")
app.use(static)

app.get("/",(req,res) => {
    res.render("index",{
        title:"Home"
    })
})
app.use(attendanceRoute)
const port = process.env.PORT
const host = process.env.HOST
app.listen (port,()=>{
    console.log(`app listening on ${host}:${port}`)
})

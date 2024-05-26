const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")

app.use(static)

app.get("/",(req,res) => {
    res.send("Hello World")
})

const port = process.env.PORT
const host = process.env.HOST
app.listen (port,()=>{
    console.log(`app listening on ${host}:${port}`)
})

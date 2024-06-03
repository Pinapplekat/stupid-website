const express = require("express")
const fs = require('node:fs')
const bodyParser = require('body-parser')

var app = express()
var port = 7999

app.use(bodyParser.json())

app.get("/all", (req,res) => {
    var data = fs.readFileSync("userlist.json")
    data = JSON.parse(data)
    console.log(data)
    res.send(data)
})

app.post("/new", (req,res) => {
    var {name,password} = req.body
    console.log(`User created with the name ${name}`)
    res.send(`Created user ${name}`)
})

app.listen(port, (e)=>{
    if(e) throw e
    console.log(`Server online at ${port}`)
})
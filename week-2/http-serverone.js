const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.send('<b>Hello there<b>')
})

app.listen(port)
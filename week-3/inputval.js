const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json()) 

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys
    const kidneylength = kidneys.length

    res.send('You have '+ kidneylength + " kidneys")
})

//global catches are used to hide our preview from the end user. Also called error handing middlewares
app.use(function(err, req, res, next){
    res.json({
        msg: "Somthing is up with our server"
    })
})

app.listen(3000)
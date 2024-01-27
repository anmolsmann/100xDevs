const express = require("express")
const app = express()

app.get("/health-checkup", function(req, res){
    const username = req.headers.username
    const password = req.headers.password
    const kidneyid = req.query.kidneyid

    if(username != "Anmol" || password != "pass"){
        res.status(400).json({
            msg: "Something is up with your inputs"
        })
        return 
    }
    if(kidneyid != 1 && kidneyid!=2){
        res.status(400).json({
            msg: "Something is up with your inputs"
        })
    }

    res.json({
        msg:"Your kindey is fine"
    })
})

app.listen(3003)
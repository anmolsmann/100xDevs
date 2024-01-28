const express = require("express")
const app = express()

function isOldEnoughMw(req, res, next){
    const age = req.query.age
    if(age>=14){
        next()
    }
    else{
        res.json({
            msg: "Underage"
        })
    }
}

//app.use(isOldEnoughMw) if it is being used in each app

app.get("/ride1", isOldEnoughMw, function(req,res){
        res.json({
            msg: "You have successfully boarded the ride1!"
        })
    })

app.get("/ride2", isOldEnoughMw, function(req,res){
        res.json({
            msg: "You have successfully boarded the ride2!"
        })
    })

app.listen(3000)
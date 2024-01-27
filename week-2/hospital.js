const express = require('express')
const app = express();

var users = [{
    name: "Anmol",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());


app.get("/", function(req, res){
    const AnmolKidneys = users[0].kidneys;
    const numberOfKidneys = AnmolKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(AnmolKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    //send a 411 when there are no unhealthy kidney
    if(isAtleast){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        })  
    }
    else{
        res.status(411).json({
            msg: "Bad input"
        });
    }
})

function isAtleast(){
let atLeastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidneys = true;
        }
    }
    return atLeastOneUnhealthyKidneys;
}

app.listen(3002)
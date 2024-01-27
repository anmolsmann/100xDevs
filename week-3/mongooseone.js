const mongoose = require("mongoose")
const express = require("express")
const app = express()

mongoose.connect("mongodb+srv://anmolsmann:Anushelly%402528@cluster0.xtqfu2g.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String ,username: String, password: String});

app.post("/signup", async function(req,res){
    const username =  req.body.username
    const password =  req.body.password
    const name = req.body.name

    const ExistingUser = await User.findOne({email: username})
    if (ExistingUser){
        return res.status(400).send ("User already exists!")
    }

    const user = new User({ 
        name: name, 
        username: username,  
        password: password 
    });
    user.save()

    res.json({
        "msg": "User created successfully"
    })
})


//kitty.save().then(() => console.log('meow'));
const express = require("express")
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number())

/*const schema= zod.object({
    email: zod.string(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
})
*/

app.use(express.json())

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response){
        res.status(411).json({
            msg: "Invalid Input"
        })
    }else{
        res.send({
            response
        })
    }
})

app.listen(3000)
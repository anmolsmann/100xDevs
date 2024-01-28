const jwt = require("jsonwebtoken")
const value ={
    name: "Anmol",
    accnumber:  1234567890,
}

const token = jwt.sign(value, "secret")
console.log(token)
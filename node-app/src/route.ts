const app = express()

enum responseStatus{
    success = 200,
    notFound = 404,
    error = 500
}

app.get("/", (req,res)=>{
    if(!req.query.userId){
        res.status(responseStatus.notFound).json({})
    }
    res.json({})
})
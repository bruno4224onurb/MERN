import express from 'express'

//the same as saying create server
const app = express()

//method to make the app listen
app.use(express.json())

//app.httpmethod(Path, Handler)
//get example
app.get('/', (req,res)=>{
    res.status(200).json({msg: "Hello User"})
})

//post example
app.post('/', (req,res)=>{
    console.log(req.body)

    res.status(200).json({msg: "Post Request"})
})

app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000."))
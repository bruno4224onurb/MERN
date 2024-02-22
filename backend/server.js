import express from 'express'

const app = express()
//the same as saying create server

//app.httpmethod(Path, Handler)
//get example
app.get('/', (req,res)=>{
    res.status(200).json({msg: "Hello User"})
})

//post example
app.post('/', (req,res)=>{
    res.status(200).json({msg: "Post Request"})
})

app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000."))
import express from 'express'

const app = express()
//the same as saying create server

//app.httpmethod(Path, Handler)
app.get('/', (req,res)=>{
    res.send('Hello User')
})

app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000."))
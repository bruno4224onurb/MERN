import express from 'express'
import { postRoutes } from './routes/postsRoutes'
import { MongoClient } from 'mongodb'

const app = express()

app.use(express.json())

app.use('/api/posts', postRoutes)

//connect mongodb to server then showing that connection went fine
MongoClient.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connected to DB succesfully!");
}).catch((err)=>console.log(err));
//catching any error and displaying it

app.listen(4000, 'localhost', ()=>console.log("Listening to port 4000."))
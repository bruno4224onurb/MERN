import express from "express";
import { postRoutes } from './routes/postsRoutes';
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);

//connect mongodb to server then showing that connection went fine
//mongoose has the exact same syntax
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("Connected to DB succesfully!");
    //listen to reqs if the connection is succesfull
    app.listen(4000, 'localhost', () => console.log("Listening to port 4000."));
}).catch((err) => console.log(err));
//catching any error and displaying it

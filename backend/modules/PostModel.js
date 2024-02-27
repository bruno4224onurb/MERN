import mongoose from "mongoose";

const PostSquemma = new mongoose.Schemma({
    title: {
        type: String,
        required: true,
        //can set max and min carachters or unique
    },
    body: {
        type: String,
        required: true,
        //can set max and min carachters or unique
    }
    //setting date to posts
}, { timestamps: true })

//turn schemma into a model using mongoose
const Post = mongoose.model("Post", PostSquemma)
//if the first argument is changed it will create a collection of the new string inserted(ex: user)

//export posts
export default Post
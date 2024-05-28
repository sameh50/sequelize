
import express from "express";
import sequelize from "./database/dbconnection.js";
import { userModel } from "./database/models/user.model.js";
import { postModel } from "./database/models/post.model.js";
import { commentModel } from "./database/models/comm.model.js";
import userRouter from "./modules/user/user.routs.js";
import  postRouter  from "./modules/post/post.routs.js";
import commentRouter from "./modules/comment/comm.routs.js";
import cors from "cors"

const app = express()
const port =process.env.PORT|| 3000


app.listen(port, () => console.log(`server is running on port ${port}`))

//



app.use(express.json())
sequelize.sync({ alter: true })
app.use(cors())
app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)




// get posts with users//
/*
app.get('/posts_users', async (req, res) => {

    let users = await postModel.findAll({
        include: userModel
    })
    res.json({ messege: "get success", users })




})/*






















*/






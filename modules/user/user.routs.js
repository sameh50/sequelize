import { userModel } from "../../database/models/user.model.js"
import { Router } from "express"
import { adduser, getUser, signUser, u_p_c, updateUser } from "./user.controller.js"
const userRouter = Router()
// add user(sign up) ///*
userRouter.post('/users', adduser)
//sign in//

userRouter.get('/signin', signUser)
// get user//

userRouter.get('/users', getUser)

// update user//

userRouter.patch('/:id', updateUser)














//get user with posts and comments

userRouter.get('/users_posts_comments/:id', u_p_c)






export default userRouter



import { Router } from "express";
import { addComment, deleteComment, getcomment, updateComment } from "./comm.controller.js";
const commentRouter = Router()

//read comments
commentRouter.get('/comments',getcomment)
//add comment
commentRouter.post('/comments',addComment)
//update comment
commentRouter.patch('/comments/:id',updateComment)
//delete comment
commentRouter.delete('/comments/:id',deleteComment)

export default commentRouter
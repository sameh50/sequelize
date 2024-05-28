// get posts /
import { Router } from "express";
import { addPost, deletePost, getPost, getPost_author, updatePost } from "./post.controller.js";
const postRouter = Router()


postRouter.get('/posts', getPost)
postRouter.get('/posts_author/:id', getPost_author)

postRouter.post('/posts', addPost)
postRouter.patch('/posts/:id', updatePost)
postRouter.delete('/posts/:id', deletePost)

export default postRouter
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"
// get posts (read)

export const getPost = async (req, res) => {

    let users = await postModel.findAll({

    })
    res.json({ messege: "get success", users })




}
// add posts

export const addPost = async (req, res) => {
    const { title, content } = req.body
    let posts = await postModel.create({
        title, content

    })
    res.json({ messege: "add success", posts })




}
// updateposts

export const updatePost = async (req, res) => {
    const { id, title, content } = req.body
    let posts = await postModel.update(
        { title, content },
        {
            where: {
                id: req.params.id,

            }
        }

    )
    res.json({ messege: "update success", posts })




}
// deleteposts

export const deletePost = async (req, res) => {
    const { title, content } = req.body
    let posts = await postModel.destroy(
        {
            where: {
                id: req.params.id,

            }
        }

    )
    res.json({ messege: "delete success", posts })




}

//get post with author



export const getPost_author = async (req, res) => {

    let user_posts = await userModel.findAll({

        include: postModel,
where:{id:req.params.id}
    })
    res.json({ messege: "get success", user_posts })




}
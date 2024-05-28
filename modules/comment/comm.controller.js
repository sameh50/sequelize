import { commentModel } from "../../database/models/comm.model.js"


//read comment

export const getcomment = async (req, res) => {

    let comment = await commentModel.findAll({

    })
    res.json({ messege: "get success", comment })
}



//add comment

export const addComment = async (req, res) => {
    const { content } = req.body
    let comment = await commentModel.create({
        content

    })
    res.json({ messege: "add success", comment })
}

//update comment

export const updateComment = async (req, res) => {
    const { content } = req.body
    let updatecomment = await commentModel.update({
        content

    },
        {
            where: {
                id: req.params.id

            }
        }
    )
    res.json({ messege: "update success", updatecomment })
}

//delete comment

export const deleteComment = async (req, res) => {
    const { content } = req.body
    let deletecomment = await commentModel.destroy(


        {
            where: {
                id: req.params.id

            }
        }
    )
    res.json({ messege: "delete success" })
}

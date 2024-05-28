
// add user sign up ///*

import { where } from "sequelize"
import { commentModel } from "../../database/models/comm.model.js"
import { postModel } from "../../database/models/post.model.js"
import { userModel } from "../../database/models/user.model.js"
import bcrypt from "bcrypt"
export const adduser = async (req, res) => {

    const user = await userModel.findOrCreate({
        where: { email: req.body.email, password: bcrypt.hashSync(req.body.password, 8) },

    })
    if (!user[1]) {
        res.json({ messege: 'user already exist', user })

    } else {


        res.json({ messege: 'add success', user })
    }
}




//sign in//
export const signUser = async (req, res) => {

    const user = await userModel.findAll({
        where: { email: req.body.email }

    })
    if (user.length === 0) {
        res.json({ msg: "email not found" })

    } else if (user.length != 0) {

        let match = bcrypt.compareSync(req.body.password, user[0].password)


        if (match) {
            return res.json({ msg: "log in success..token", user })
        } else {
            return res.status(401).json({ msg: "password inccorect" })
        }

    } else {

        res.json({ msg: "un authorized user" })
    }



}




// get user//
export const getUser = async (req, res) => {

    let users = await userModel.findAll()
    res.json({ messege: "get success", users })




}
// update user//
export const updateUser = async (req, res) => {
    const { name, email, password } = req.body
    let usersUpdate = await userModel.update({ name: name, email: email },
        {
            where: {
                id: req.params.id,
            },
        },)
    res.json({ messege: "update success" })
}


//get user with posts and comments





export const u_p_c = async (req, res) => {

    let upc = await userModel.findAll({

        include: [postModel, commentModel,],
        where: { id: req.params.id }
    }




    )
    res.json({ messege: "get success", upc })
}
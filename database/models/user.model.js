import { DataTypes } from "sequelize";
import { postModel } from "./post.model.js";
import sequelize from "../dbconnection.js";
import { commentModel } from "./comm.model.js";


export const userModel = sequelize.define('user', {
    // id made automaticly bs seqelize
    name: {
        type: DataTypes.STRING


    },
    email: {
        type: DataTypes.STRING,


    },
    password: {
        type: DataTypes.STRING

    }

})

userModel.hasMany(postModel, { foreignKey: "author" })
userModel.hasMany(commentModel, { foreignKey: "author" })




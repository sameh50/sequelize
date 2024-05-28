
import sequelize from "../dbconnection.js";
import { DataTypes,} from "sequelize";

import { userModel } from "./user.model.js";
import { commentModel } from "./comm.model.js";

export const postModel = sequelize.define('post', {
    // id made automaticly bs seqelize
    title: {
        type: DataTypes.STRING


    },
    content: {
        type: DataTypes.STRING
    },



},)

postModel.hasMany(commentModel)

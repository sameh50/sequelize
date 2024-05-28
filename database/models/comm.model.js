import { DataTypes } from "sequelize";
import sequelize from "../dbconnection.js";
import { userModel } from "./user.model.js";

export const commentModel = sequelize.define('comment', {
    // id made automaticly bs seqelize
    content: {
        type: DataTypes.STRING
    },
})



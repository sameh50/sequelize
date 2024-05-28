import { Sequelize, DataTypes } from "sequelize";
// sequelize connections
const sequelize = new Sequelize('mysql://urmfqy9rawng4t5c:9W0y6oSp2SXGN48xqj3B@bdofhyw6qglgy7fc7xfs-mysql.services.clever-cloud.com:3306/bdofhyw6qglgy7fc7xfs')
sequelize.authenticate().then(() => {

    console.log('Connection has been established successfully.');

}).catch((err) => {

    console.error('Unable to connect to the database:', err);
})

export default sequelize
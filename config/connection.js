
const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;
 //necessary for database deployment.
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    //for connecting to local database.
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306  //local database address.
        }
    );
}

module.exports = sequelize;
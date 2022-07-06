// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

//importing sequelize from npm
import Sequelize from 'sequelize';

//initiating sequelize based on values in .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//export
export default sequelize;

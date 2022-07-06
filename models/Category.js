//import sequelize and associated methods
import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;

// import our database connection from config.js
import sequelize from '../config/connection.js'

// Initialize category model (table) by extending off Sequelize's Model class
class Category extends Model {}

Category.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, //table configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//export
export default Category;

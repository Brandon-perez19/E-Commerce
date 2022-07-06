//import sequelize and associated methods
import pkg from 'sequelize';
const { Model, DataTypes } = pkg;

// import our database connection from config.js
import sequelize from '../config/connection.js';

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

Tag.init(
  //defining columns
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name:{
      type: DataTypes.STRING
    }
  }, //table configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//export
export default Tag;

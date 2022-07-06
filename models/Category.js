import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;
import sequelize from '../config/connection.js'

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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

export default Category;

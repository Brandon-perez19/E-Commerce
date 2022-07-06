import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;
import sequelize from '../config/connection.js';

class Tag extends Model {}

Tag.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

export default Tag;

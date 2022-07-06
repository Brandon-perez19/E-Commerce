//import sequelize and associated methods
import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;

// import our database connection from config.js
import sequelize from '../config/connection.js';

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      },//needed due to parent table foreign key restriction
      onDelete: 'CASCADE'
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      },//needed due to parent table foreign key restriction
      onDelete: 'Cascade'
    }
  }, //table configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
//export
export default ProductTag;

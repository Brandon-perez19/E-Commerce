// import models
import Product from './Product.js';
import Category from './Category.js'
import Tag from './Tag.js';
import ProductTag from './ProductTag.js'

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignkey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  foreignkey: 'product_id',
  onDelete: 'CASCADE'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignkey: 'tag_id',
  onDelete: 'CASCADE'
})

//export associations
export {
  Product,
  Category,
  Tag,
  ProductTag,
};

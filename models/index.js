// import models
import Product from './Product';
import Category from './Category'
import Tag from './Tag';
import ProductTag from './ProductTag'

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey: 'category_id',
})
// Categories have many Products
Category.hasMany(Product, {
  foreignkey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tag_id',
  foreignkey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  through: ProductTag,
  as: 'product_id',
  foreignkey: 'tag_id'
})

export {
  Product,
  Category,
  Tag,
  ProductTag,
};

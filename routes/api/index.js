//express/router set up
import express from 'express';
var router = express.Router();

//importing specific routes
import categoryRoutes from './category-routes.js';
import productRoutes from './product-routes.js';
import tagRoutes from './tag-routes.js';

//access points to specific routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

//export
export default router;

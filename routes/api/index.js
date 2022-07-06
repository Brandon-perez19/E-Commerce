import express from 'express';
var router = express.Router();

import categoryRoutes from './category-routes.js';
import productRoutes from './product-routes.js';
import tagRoutes from './tag-routes.js';

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

export default router;

//express/router set-up
import express from 'express';
var router = express.Router();

//import associations
import { Product } from '../../models/index.js';
import { Category } from '../../models/index.js';

// The `/api/categories` endpoint

//finds all categories
router.get('/', (req, res) => {
  Category.findAll({
    //includes product model for associated product data
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    ]
  })//display
    .then(dbCategorydata => res.json(dbCategorydata))
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//find category based on id value
router.get('/:id', (req, res) => {
  Category.findOne({
    //find based off id
    where: {
      id: req.params.id
    },
    //include associated product data
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    ]
  })
    .then(dbCategorydata => {
      //if id does not exist
      if (!dbCategorydata) {
        res.status(404).json({ message: 'No Category found with this ID.' })
        return;
      } //display
      res.json(dbCategorydata)
    }) //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//creates a category 
router.post('/', (req, res) => {
  //required to create category
  Category.create({
    category_name: req.body.category_name
  })//display
    .then(dbCategorydata => res.json(dbCategorydata))
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

//update category based on id value
router.put('/:id', (req, res) => {
  //required to update category
  Category.update(
    {
      category_name: req.body.category_name
    },
    //find category to update based on id
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCategorydata => {
      //if id does not exist
      if (!dbCategorydata) {
        res.status(404).json({ message: 'No Category found with this ID.' })
        return;
      } //display 
      res.json(dbCategorydata)
    }) //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//deletes category based on id value
router.delete('/:id', (req, res) => {
  Category.destroy({
    //finds category with id value
    where: {
      id: req.params.id
    }
  })
    .then(dbCategorydata => {
      //if id value does not exist
      if (!dbCategorydata) {
        res.status(404).json({ message: 'No Category found with this ID.' })
        return;
      } //display
      res.json(dbCategorydata)
    }) //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//catch all 
export default router;

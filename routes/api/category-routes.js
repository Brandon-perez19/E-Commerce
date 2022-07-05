import express from 'express';
var router = express.Router();
import { Category, Product } from '../../models';

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes:["id", "category_name"],
      }
    ]
  })
  .then(dbCategorydata => res.json(dbCategorydata))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes:["id", "category_name"],
      }
    ]
  })
  .then(dbCategorydata => {
    if(!dbCategorydata){
      res.status(404).json({ message: 'No Category found with this ID.'})
      return;
    }
    res.json(dbCategorydata)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategorydata => res.json(dbCategorydata))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  })
  .then(dbCategorydata => {
    if(!dbCategorydata){
      res.status(404).json({ message: 'No Category found with this ID.'})
      return;
    }
    res.json(dbCategorydata)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategorydata => {
    if(!dbCategorydata){
      res.status(404).json({ message: 'No Category found with this ID.'})
      return;
    }
    res.json(dbCategorydata)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

export default router;

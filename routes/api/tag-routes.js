import express from 'express';
var router = express.Router();
import {Category, Product} from '../../models/index.js';
import {Tag} from '../../models/index.js';
import {ProductTag} from '../../models/index.js';

// The `/api/tags` endpoint
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes:["id", "product_name", "price", "stock", "category_id"],
      through: ProductTag,
      as: "tagged_product"
    }
  })
    .then(dbTagdata => res.json(dbTagdata))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes:["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "tagged_product"
      }
    ]
  })
    .then(dbTagdata => {
      if (!dbTagdata) {
        console.log(error)
        res.status(404).json({ error: "No Tag found with that ID" })
      }
      res.json(dbTagdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbTagdata => res.json(dbTagdata))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbTagdata => {
      if (!dbTagdata) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
      }
      res.json(dbTagdata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagdata => {
      if (!dbTagdata) {
        res.json(404).json({ message: 'No Tags found with that ID.' })
      }
      res.json(dbTagdata)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  // delete on tag by its `id` value
});

export default router

//express/router set up
import express from 'express';
var router = express.Router();

//importing associations
import {Product} from '../../models/index.js';
import {Tag} from '../../models/index.js';
import {ProductTag} from '../../models/index.js';

// The `/api/tags` endpoint
//retrieves all tags
router.get('/', (req, res) => {
  Tag.findAll({
    //includes associated product data. Product and tag arent associated directly, need to include intermediate table through as statement
    include: {
      model: Product,
      attributes:["id", "product_name", "price", "stock", "category_id"],
      through: ProductTag,
      as: "tagged_product"
    }
  })
    //displays data in json format
    .then(dbTagdata => res.json(dbTagdata))
    //catch error if one occurs
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//finds one tag based on id in url
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    //includes associated product data. Product and tag arent associated directly, need to include intermediate table through as statement
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
      //if server cant find a tag with associated ID
      if (!dbTagdata) {
        console.log(error)
        res.status(404).json({ error: "No Tag found with that ID" })
      }
      //display data
      res.json(dbTagdata);
    })
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// creates a new tag
router.post('/', (req, res) => {
  //required to make a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    //display content
    .then(dbTagdata => res.json(dbTagdata))
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  //required to update tag
  Tag.update({
    tag_name: req.body.tag_name
  },
    //finds the tag to update based on id
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbTagdata => {
      //if id does not exist
      if (!dbTagdata) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
      }
      //display
      res.json(dbTagdata);
    })
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//deletes a single tag based on id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagdata => {
      //if tag does not exist
      if (!dbTagdata) {
        res.json(404).json({ message: 'No Tags found with that ID.' })
      }
      //display
      res.json(dbTagdata)
    })
    //catch all
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//export
export default router

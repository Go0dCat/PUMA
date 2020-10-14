const express = require('express');
const router = express.Router();

//require models here...
const Product = require('../models/product');


//routing
//gets all products
router.get('/products', function(req, res, next){
  console.log('req all products');
  Product.find().then(function(products){
    res.send(products);
  }).catch(next);
});

//gets product by subcategory
router.get('/category/:category', function(req, res, next){
  console.log('req products by category');
  Product.find({SubCategory: req.params.category}).then(function(products){
    console.log('res with category');
    res.send(products);
  }).catch(next);
});

router.get('/category/:category/:number', function(req, res, next){
  console.log('req products by category');
  Product.find({SubCategory: req.params.category}).then(function(products){
    var result = [];
    var numbers = [];

    for (let i = 0; i < Math.min(req.params.number, products.length); i++) {
      let foundX = false;
      do {
        let x = Math.floor(Math.random() * products.length);
        if(!numbers.includes(x)) {
          result.push(products[x]);
          numbers.push(x);
          foundX = true;
          //console.log('found and added' + x);
        }
        //console.log('found ' + x);
      } while(!foundX);
    }
    console.log('res with category by x numbers');
    res.send(result);
  }).catch(next);
});

//get all products within a subcategory and type
router.get('/category/:category/type/:type', function(req, res, next){
  console.log('req products by category');
  Product.find({SubCategory: req.params.category, Type: req.params.type}).then(function(products){
    console.log('res with category');
    res.send(products);
  }).catch(next);
});

module.exports = router;

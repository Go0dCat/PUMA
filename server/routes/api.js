const express = require('express');
const router = express.Router();

//require models here...
const Product = require('../models/product');


//routing
//gets all products
router.get('/products', function(req, res, next){
  console.log('req all products');
  Product.find().then(funciton(products){
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

module.exports = router;

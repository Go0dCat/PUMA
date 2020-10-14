const express = require('express');
const router = express.Router();

//require models here...
const Product = require('../models/product');
const PriceLevel = require('../models/pricelevel');


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

router.get('/category/:category/number/:number', function(req, res, next){
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

router.get('/category/:category/number/:number/pricelevel/:pricelevel', function(req, res, next){
  console.log('req products by category and price');

  Product.find({SubCategory: req.params.category}).then(function(products){
    let result = [];
    let numbers = [];
    console.log('got them products by SubCategory');

    for (let i = 0; i < Math.min(req.params.number, products.length); i++) {
      let foundX = false;
      do {
        let x = Math.floor(Math.random() * products.length);
        if(!numbers.includes(x)) {
          //console.log('found one!');

          //add check for price here
          PriceLevel.findOne({name: req.params.pricelevel}).then(function(pricelevel){
            console.log('looking for prices');

            //loop through pricelevel list
            for(let j = 0; j < pricelevel.limits.length; j++) {
              console.log('looping through list entry ' + i + ' '+ j);
              if(pricelevel.limits[j].beverage === products[x].SubCategory) {
                console.log('found matching bev + subcat');
                //get product kr/liter
                let compPrice = products[x].Price / products[x].Volume;
                if(pricelevel.limits[j].upperlimit >= compPrice && pricelevel.limits[j].lowerlimit <= compPrice) {
                  console.log('entered comparison');

                  //console.log('result is' + result);
                  result.push(products[x]);
                }
              }
              console.log('printing i: ' + i +' and ' + j);
              if(i >= Math.min(req.params.number, products.length) - 1 && j >=pricelevel.limits.length -1) {
                console.log('i got here');
                res.send(result);
              }
            }
            //NOTE this will not return anything if no matching entry exits

          }).catch(next);


          numbers.push(x);
          foundX = true;
          //console.log('found and added' + x);
        }

        //console.log('found ' + x);
      } while(!foundX);
      console.log('dowhile done');

    }
    //res.send(result);
    console.log('res with category by x numbers');

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

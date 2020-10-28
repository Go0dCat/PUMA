const express = require('express');
const router = express.Router();

// Required models
const Product = require('../models/product');
const Site = require('../models/site');
const PriceLevel = require('../models/pricelevel');

/* Gets all sites */
router.get('/client/sites', function(req, res, next) {
  console.log('Request: All sites');
  Site.find().then(function(sites){
    res.send(sites);
  }).catch(next);
});

/* Gets all products */
router.get('/client/products', function(req, res, next){
  console.log('Request: All products');
  Product.find().then(function(products){
    res.send(products);
  }).catch(next);
});

/* Gets all products by SubCategory */
router.get('/client/category/:category', function(req, res, next){
  console.log('Request: All products Subcategory ' + req.params.category);
  Product.find({SubCategory: req.params.category}).then(function(products){
    res.send(products);
  }).catch(next);
});

/* Gets x number of products by SubCategory */
router.get('/client/category/:category/quantity/:quantity', function(req, res, next){
  console.log('Request: ' + req.params.quantity + ' products Subcategory ' + req.params.category);
  Product.find({SubCategory: req.params.category}).then(function(products){
    var result = [];
    var numbers = [];
    for (let i = 0; i < Math.min(req.params.quantity, products.length); i++) {
      let foundX = false;
      do {
        let x = Math.floor(Math.random() * products.length);
        if(!numbers.includes(x)) {
          result.push(products[x]);
          numbers.push(x);
          foundX = true;
        }
      } while(!foundX);
    }
    res.send(result);
  }).catch(next);
});

// TODO number --> quantity


/* Returns a maximum of x quantity of products by SubCategory and PriceLevel
 *    Returns less than requested quantity if there are fewer products that match pricelevel
 *
 * How to use this:
 *   Use postman for this:
 *      Fill up pricelevel with get req: "http://localhost:8081/api/pricelevel/create"
 *      Fill up products  with get req: "http://localhost:8081/api/product/all"
 *   Then you can make url req
 *      For instance: "http://localhost:8081/api/client/category/Rött vin/quantity/10/pricelevel/low"
 *
 * TODO SJ: Note that this function can't handle pricelevels not existing currently
 */
router.get('/client/category/:category/quantity/:quantity/pricelevel/:pricelevel', function(req, res, next){
  console.log('Request: ' + req.params.quantity + ' products in Subcategory ' + req.params.category + ' by ' + req.params.pricelevel + ' pricelevel');

  Product.find({SubCategory: req.params.category}).then(function(products){
    let result = [];
    let numbers = [];
    //console.log('got them products by SubCategory');

    for (let i = 0; i < Math.min(req.params.quantity, products.length); i++) {
      let foundX = false;
      do {
        let x = Math.floor(Math.random() * products.length);
        if(!numbers.includes(x)) {
          //console.log('found one!');

          //add check for price here
          PriceLevel.findOne({name: req.params.pricelevel}).then(function(pricelevel){
            //console.log('looking for prices');

            //TODO check what happens if price doesnt exist
            //loop through pricelevel list
            for(let j = 0; j < pricelevel.limits.length; j++) {
              //console.log('looping through list entry ' + i + ' '+ j);
              if(pricelevel.limits[j].beverage === products[x].SubCategory) {
                //console.log('found matching bev + subcat');
                //get product kr/liter
                //console.log(products[x].Price +' / ' +products[x].Volume/1000);
                let compPrice = products[x].Price / (products[x].Volume/1000);
                console.log(products[x].Price +' / ' +products[x].Volume +' = ' + compPrice);

                if(pricelevel.limits[j].upperlimit >= compPrice && pricelevel.limits[j].lowerlimit <= compPrice) {
                  //console.log('entered comparison');
                  console.log('i got through' + compPrice);

                  //console.log('result is' + result);
                  result.push(products[x]);
                }
              }
              //console.log('printing i: ' + i +' and ' + j);
              if(i >= Math.min(req.params.quantity, products.length) - 1 && j >= pricelevel.limits.length -1) {
                //console.log('i got here');
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

router.get('/client/quantity/:quantity/pricelevel/:pricelevel', function(req, res, next){
  console.log('Request: ' + req.params.quantity + ' by ' + req.params.pricelevel + ' pricelevel');

  Product.find().then(function(products){
    let result = [];
    let numbers = [];
    //console.log('got them products by SubCategory');

    for (let i = 0; i < Math.min(req.params.quantity, products.length); i++) {
      let foundX = false;
      do {
        let x = Math.floor(Math.random() * products.length);
        if(!numbers.includes(x)) {
          //console.log('found one!');

          //add check for price here
          PriceLevel.findOne({name: req.params.pricelevel}).then(function(pricelevel){
            //console.log('looking for prices');

            //TODO check what happens if price doesnt exist
            //loop through pricelevel list
            for(let j = 0; j < pricelevel.limits.length; j++) {
              //console.log('looping through list entry ' + i + ' '+ j);
              if(pricelevel.limits[j].beverage === products[x].SubCategory) {
                //console.log('found matching bev + subcat');
                //get product kr/liter
                //console.log(products[x].Price +' / ' +products[x].Volume/1000);
                let compPrice = products[x].Price / (products[x].Volume/1000);
                console.log(products[x].Price +' / ' +products[x].Volume +' = ' + compPrice);

                if(pricelevel.limits[j].upperlimit >= compPrice && pricelevel.limits[j].lowerlimit <= compPrice) {
                  //console.log('entered comparison');
                  console.log('i got through' + compPrice);

                  //console.log('result is' + result);
                  result.push(products[x]);
                }
              }
              //console.log('printing i: ' + i +' and ' + j);
              if(i >= Math.min(req.params.quantity, products.length) - 1 && j >= pricelevel.limits.length -1) {
                //console.log('i got here');
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

/* Gets non-alcoholic products within category */
router.get('/client/non-alcoholic/:category', function(req, res, next){
  console.log('Request');
  category = req.params.category;
  if (category == 'Cider' || category == 'Blanddrycker') {
    category = 'Cider & Blanddryck';
  }
  else if (category == 'Rött vin') {
    category = 'Rött';
  } else if (category == 'Vitt vin') {
    category = 'Vitt';
  } else if (category == 'Rosévin') {
    category = 'Rosé';
  } else if (category == 'Mousserande vin') {
    category = 'Mousserande';
  }
  Product.find({SubCategory: 'Alkoholfritt', Type: category}).then(function(products){
    res.send(products);
  }).catch(next);
});

// TODO: Delete?
/* Get all products within a SubCategory and Type */
router.get('/client/category/:category/type/:type', function(req, res, next){
  console.log('Request');
  Product.find({SubCategory: req.params.category, Type: req.params.type}).then(function(products){
    res.send(products);
  }).catch(next);
});

module.exports = router;

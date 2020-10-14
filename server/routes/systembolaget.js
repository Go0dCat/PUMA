const express = require('express');
const router = express.Router();
const axios = require('axios');


//require models here...
const Product = require('../models/product');


//routing

//gets all products from systembolaget
router.get('/systembolaget', function(req, res, next){
  console.log('req to systembolaget');


  //fix Authorization ,
  //headers: { Authorization: 'Bearer ' + token //the token is a variable which holds the token }
  //Ocp-Apim-Subscription-Key
  //headers: { cp-Apim-Subscription-Key: '06fdbc8b8df845b3840710ba53db9009'}

  axios.get('https://api-extern.systembolaget.se/product/v1/product', {
    headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    console.log('res from systembolaget');
    console.log(response.data);
    //console.log(response.data.explanation);

    //res.send(response.data;
  })
  .catch(error => {
    console.log(error);
  })

  res.send({systembolaget: 'yes'});
});

//search

//TODO add '/systembolaget/search/:searchstring'
router.get('/systembolaget/search', function(req, res, next){
  console.log('req to systembolaget');

  var searchArray = [
      'Alkoholfritt',
      'Rött vin',
      'Vitt vin',
      'Öl',
      'Cider',
      'Blanddrycker',
      'Mousserande vin',
      'Rosévin'
    ];

    var isDone = false;
    //
  searchArray.forEach((item) => {
    axios.get('https://api-extern.systembolaget.se/product/v1/product/search?SubCategory=' + item, {
      headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}})
        .then(response => {
          console.log('res from systembolaget');
          //console.log(response.data.Hits[0]);
          //res.send(response.data.Hits[0]);
          for(j = 0; j <10; j++) {
            addProduct(response.data.Hits[j]);
          }
       //res.send(response.data);
      }).catch(error => {
        console.log(error);
      });
    });
    //res.send({systembolaget: 'done'});
});

/* Request to add Products in SubCategory. Specify quantity. */
router.get('/systembolaget/category/:category/quantity/:quantity', function(req, res){
  console.log('req to systembolaget');
  axios.get('https://api-extern.systembolaget.se/product/v1/product/search?SubCategory=' + req.params.category, {
      headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    console.log('res from systembolaget');
    quantity = req.params.quantity;
    for(i = 0; i < quantity; i++) {
      product = addProduct(response.data.Hits[i]);
      if (product === undefined) {
        quantity++;
      }
    }
  }).catch(error => {
    console.log(error);
  });
  res.send({Systembolaget: 'Done with adding ' + req.params.category + ' to db'}); 
});

/* Request to add Product with ProductId to DB */
router.get('/systembolaget/product/:productid', function(req, res){
  console.log('req to systembolaget');
  axios.get('https://api-extern.systembolaget.se/product/v1/product/' + req.params.productid, {
    headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    product = addProduct(response.data);
    // TODO: Specify message to user
    if (product === undefined) {
      res.send('Could not add ' + req.params.productid + ' to db');
    }
    res.send(product);
  }).catch(error => {
    console.log(error);
    res.send({systembolaget: 'Nooo'});
  });
});

/* Function to add product to DB if it does not exist already. Returns Product if succeed, otherwise null. */
function addProduct(product) {
  Product.findOne({ProductId: product.ProductId}).then(function(exists) {
    if (exists === null) {
      Product.create({
        ProductId: product.ProductId,
        ProductNumber: product.ProductNumber,
        ProductNameBold: product.ProductNameBold,
        ProductNameThin: product.ProductNameThin,
        Category: product.Category,
        BottleTextShort: product.BottleTextShort,
        Seal: product.Seal,
        AlcoholPercentage: product.AlcoholPercentage,
        Volume: product.Volume,
        Price: product.Price,
        SubCategory: product.SubCategory,
        Type: product.Type
      }).then(function(){
      console.log(product.ProductId + ' added to db heeeey');
      return Product;
      }).catch(error => {
        console.log(error);
        // TODO: Does not return properly
        return null;
      });
    } else {
      console.log('Product ' + product.ProductId + ' alreeeeeeady exists');
      // TODO: Does not return properly
      return null;
    }
  });
}

//adds product to db
/*router.get('/systembolaget/test/:productid', function(req, res){
  var productid = req.params.productid;
  if (!existsInDB(productid)) {
    console.log('Request to Systembolaget');
    axios.get('https://api-extern.systembolaget.se/product/v1/product/' + productid, {
      headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
    ).then(response => {
      Product.create({
        ProductId: response.data.ProductId,
        ProductNumber: response.data.ProductNumber,
        ProductNameBold: response.data.ProductNameBold,
        ProductNameThin: response.data.ProductNameThin,
        Category: response.data.Category,
        BottleTextShort: response.data.BottleTextShort,
        Seal: response.data.Seal,
        AlcoholPercentage: response.data.AlcoholPercentage,
        Volume: response.data.Volume,
        Price: response.data.Price,
        SubCategory: response.data.SubCategory,
        Type: response.data.Type
      }).then(function(product){
        console.log(productid + ' added to db');
        res.send(Product);
      }).catch(error => {
        console.log(error);
        res.send({systembolaget: 'Error'});
      });
    });
  }
  else {
    console.log('bjas');
    res.send({Systembolaget: productid + ' already exists in the database'});
  }
  console.log('HEEEEEEEEEEEEEJ');
});*/

//checks if product is already in db
/*async function existsInDB(productid) {
  console.log('Här' + productid);
  Product.findOne({ProductId: productid}).then(result => {
    if (result) {
      console.log('Product already exists in DB');
      return true;
    }
    else {
      console.log('Product does not exist in DB');
      return false;
    }
  })
}*/

module.exports = router;

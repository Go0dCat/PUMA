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
router.get('/systembolaget/search', function(req, res, next){
  console.log('req to systembolaget');

  var searchArray = [
      'Rött vin',
      'Vitt vin',
      'Öl'
    ];

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


//gets prodoct with specific id from systembolaget
router.get('/systembolaget/:productid', function(req, res, next){
  console.log('req to systembolaget');

  axios.get('https://api-extern.systembolaget.se/product/v1/product/' + req.params.productid, {
    headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    console.log('res from systembolaget');
    //console.log(response.data);
    Product.findOne({ProductId: response.data.ProductId}).then(function(isFound){
      if (isFound === null) {
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
          console.log('product added to db');
          res.send(product);
        }).catch(next);
      } else {
        console.log('product already in db');
        res.send({systembolaget: 'Product ' + response.data.ProductId + ' is already in db'});
      }
    });
  }).catch(error => {
    console.log(error);
    res.send({systembolaget: 'oops you shouldnt see this'});
  });

});


module.exports = router;

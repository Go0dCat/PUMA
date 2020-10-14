const express = require('express');
const router = express.Router();

//require models here...
const PriceLevel = require('../models/pricelevel');


//routing
//gets all products
router.get('/pricelevel', function(req, res, next){
  console.log('req all pricelevels');
  res.send({type: 'get'});
});

router.post('/pricelevel', function(req, res, next){
  console.log('post req to pricelevel');
  res.send({type: 'post'});
});

router.put('/pricelevel/:levelname', function(req, res, next){
  console.log('put req to pricelevel/:levelname');
  res.send({type: 'put'});
});

router.put('/pricelevel/:levelname/beverage/:beveragename', function(req, res, next){
  console.log('put req to pricelevel/:levelname');
  res.send({type: 'put'});
});


module.exports = router;

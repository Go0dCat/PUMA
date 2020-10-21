const express = require('express');
const router = express.Router();

//require models here...
const PriceLevel = require('../models/pricelevel');


//routing
//gets all price levels
router.get('/pricelevel', function(req, res, next){
  console.log('req all pricelevels');
  res.send({type: 'get'});
});

//adds a new price level
router.post('/pricelevel', function(req, res, next){
  console.log('post req to pricelevel');

  PriceLevel.create(req.body)
  .then(function(pricelevel){
    res.send(pricelevel);
  }).catch(next);
  //res.send({type: 'post'});
});

//adds a dummy pricelevel for use
//postman get req: "http://localhost:8081/api/pricelevel/create"
router.get('/pricelevel/create', function(req, res, next){
  console.log('dummy post req to pricelevel');

  //NOTE: you can change values here :D
  PriceLevel.create({
    name: "low",
    limits: [
       {
           beverage: "Rött vin",
           lowerlimit: 0,
           upperlimit: 150
       },
       {
           beverage: "Vitt vin",
           lowerlimit: 0,
           upperlimit: 150
       },
       {
           beverage: "Öl",
           lowerlimit: 0,
           upperlimit: 35
       },
       {
           beverage: "Cider",
           lowerlimit: 0,
           upperlimit: 35
       },
       {
           beverage: "Blanddrycker",
           lowerlimit: 0,
           upperlimit: 35
       },
       {
           beverage: "Rosévin",
           lowerlimit: 0,
           upperlimit: 130
       },
       {
           beverage: "Mousserande vin",
           lowerlimit: 0,
           upperlimit: 130
       }
     ]
  })
  .then(function(pricelevel){
    res.send(pricelevel);
  }).catch(next);
  //res.send({type: 'post'});
});

//replaces all entries in limits: []
router.put('/pricelevel/:levelname', function(req, res, next){
  console.log('put req to pricelevel/:levelname');
  PriceLevel.findOneAndUpdate({name: req.params.levelname}, req.body).then(function(){
    PriceLevel.findOne({name: req.params.levelname}).then(function(pricelevel){
      res.send(pricelevel);
    });
  }).catch(next);

  //res.send({type: 'put'});
});

//adds entry in  limits: []
router.put('/pricelevel/:levelname/beverage', function(req, res, next){
  console.log('put req to pricelevel/:levelname/beverage/:beveragename');

  PriceLevel.findOneAndUpdate({name: req.params.levelname, $push: {limits: req.body}}).then(function(){
    PriceLevel.findOne({name: req.params.levelname}).then(function(pricelevel){
      res.send(pricelevel);
    });
  }).catch(next);
});

router.get('/pricelevel/:levelname/beverage/:beveragename', function(req, res, next){
  console.log('get req by beverage in list');

  PriceLevel.findOne({name: req.params.levelname, "limits.beverage":req.params.beveragename}).then(function(stuff){
      res.send(stuff);
  }).catch(next);
});

//evhbfajs
router.put('/pricelevel/:levelname/beverage/:beveragename', function(req, res, next){
  console.log('get req by beverage in list');

  PriceLevel.findOneAndUpdate({name: req.params.levelname, "limits.beverage":req.params.beveragename}, {$set: {"limits.$": req.body}}).then(function(){
    PriceLevel.findOne({name: req.params.levelname}).then(function(pricelevel){
      res.send(pricelevel);
    });
  }).catch(next);
});


module.exports = router;

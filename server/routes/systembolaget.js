const express = require('express');
const router = express.Router();
const axios = require('axios');

//require models here...


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


//gets prodoct with specific id from systembolaget
router.get('/systembolaget/:productid', function(req, res, next){
  console.log('req to systembolaget');

  axios.get('https://api-extern.systembolaget.se/product/v1/product/' + req.params.productid, {
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



module.exports = router;

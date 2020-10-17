const express = require('express');
const router = express.Router();
const axios = require('axios');

// TODO
const Site = require('../models/product');

// TODO
/* Request to add all Sites to DB */
router.get('/systembolaget/sites', function(req, res){
  console.log('req to systembolaget');
  axios.get('https://api-extern.systembolaget.se/site/v1/site', {
    headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    addSites(response.data);
  }).catch(error => {
    console.log(error);
  });
  res.send({systembolaget: 'done'});
});

// TODO
/* Function to add sites to db */
function addSites(sites) {

}

module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

// Required models
const Site = require('../models/site');

// TODO: Fix answer
/* Request to add all Sites to DB */
router.get('/site/fill', function(res){
  console.log('req to systembolaget');
  axios.get('https://api-extern.systembolaget.se/site/v1/site/search?SiteType=0', {
    headers: {'Ocp-Apim-Subscription-Key': '06fdbc8b8df845b3840710ba53db9009'}}
  ).then(response => {
    addSites(response.data.Hits);
  }).catch(error => {
    console.log(error);
  });
  res.send({systembolaget: 'done'});
});

/* Function to add Sites to DB */
function addSites(sites) {
  sites.forEach(element => {
    addSite(element);
  });
}

/* Function to add Site to DB if it does not exist already */
function addSite(site) {
  Site.findOne({SiteId: site.SiteId}).then(function(exists) {
    if (exists === null) {
      Site.create({
        SiteId: site.SiteId,
        Address: site.Address,
        DisplayName: site.DisplayName,
        PostalCode: site.PostalCode,
        City: site.City,
        County: site.County,
        OpeningHours: site.OpeningHours,
        Name: site.Name
      }).then(function(){
        console.log(site.Name + ', ' +  site.City + ' added to DB');
      }).catch(error => {
        console.log(error);
      });
    } else {
      console.log(site.Name + ', ' +  site.City + ' already in DB')
    }
  });
}

module.exports = router;

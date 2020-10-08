const express = require('express');
const router = express.Router();

//require models here...


//routing
router.get('/test', function(req, res, next){
  console.log('testing');
});

var express = require('express');
var router = express.Router();
// var images = require("../public/images/images")

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index',);

  
});

module.exports = router;

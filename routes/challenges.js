var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(' challenges respond with a resource');
});

module.exports = router;
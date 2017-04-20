var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pulsatio' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('external/start');
});

module.exports = router;

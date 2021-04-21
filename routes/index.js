var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/web_iot', function(req, res, next) {
  res.sendFile('web_iot.html', { root: 'html' });
});

router.get('/web_iot_new', function(req, res, next) {
  res.sendFile('web_iot_new.html', { root: 'html' });
});

module.exports = router;

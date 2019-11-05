var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Trang chủ' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title:'Trang chủ' });
});

router.get('/category', function(req, res, next) {
  res.render('category', { title:'Sản phẩm' });
});

module.exports = router;

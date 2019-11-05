var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('themsp', { title: 'Thêm sản phẩm' });
});

module.exports = router;
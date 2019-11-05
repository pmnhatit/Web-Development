var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('suathongtin', { title: 'Chỉnh sửa thông tin người dùng' });
});

module.exports = router;
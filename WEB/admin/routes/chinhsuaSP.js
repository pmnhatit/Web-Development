var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('chinhsuaSP', { title: 'Chỉnh sửa sản phẩm' });
});

module.exports = router;
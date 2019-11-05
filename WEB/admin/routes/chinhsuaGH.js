var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('chinhsuaGH', { title: 'Chỉnh sửa gian hàng' });
});

module.exports = router;
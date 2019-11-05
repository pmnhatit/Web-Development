var express = require('express');
var router = express.Router();

/* GET category listing. */
router.get('/', function(req, res, next) {
    res.render('category', { title:'Sản phẩm' });
});

router.get('/single', function(req, res, next) {
    res.render('single', { title:'Chi tiết đơn hàng' });
});

module.exports = router;

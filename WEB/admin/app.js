var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var topRouter = require('./routes/top');
var thongkeRouter = require('./routes/thongke');
var donhangRouter = require('./routes/donhang');
var qlnguoidungRouter = require('./routes/qlnguoidung');
var suathongtinRouter = require('./routes/suathongtin');
var themspRouter = require('./routes/themsp');
var csspRouter = require('./routes/chinhsuaSP');
var themghRouter = require('./routes/themgh');
var csghRouter = require('./routes/chinhsuaGH');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/banchay', topRouter);
app.use('/thongke', thongkeRouter);
app.use('/donhang', donhangRouter);
app.use('/qlnguoidung', qlnguoidungRouter);
app.use('/suathongtin', suathongtinRouter);
app.use('/themsp', themspRouter);
app.use('/chinhsuaSP', csspRouter);
app.use('/themgh', themghRouter);
app.use('/chinhsuaGH', csghRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var db = require('./db/initiate.js')();
var crypto = require('./routes/crypto');
var indexRouter = require('./routes/index');
var end_userRouter = require('./routes/end_user')(db);
var answerRouter = require('./routes/answer')(db);
var pageRouter = require('./routes/page')(db);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/img', express.static('./public/image'))
app.use('/api/end_user', end_userRouter);
app.use('/api/crypto', crypto);
app.use('/api/ans',answerRouter);
app.use('/api/pages',pageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

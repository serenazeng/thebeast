var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var cookieSession = require('cookie-session');

// app.use()

//引进搭建的服务
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');



//搭建一个web服务器
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
    keys:['aa','bb'],
    name:'abc_id',
    maxAge:1000*60*60
}));
app.use(express.static(path.join(__dirname, 'public')));
//配置cors中间件
app.use(cors({
    "origin": ["http://localhost:8005","http://localhost:8008"],  //允许所有前端域名
    "credentials":true,//允许携带凭证
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
    "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));



//做响应
app.use('/index', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register',register);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

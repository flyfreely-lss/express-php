var express = require('express');
var app = express();
var swig = require('swig');

app.use(express.static('public'));

// 配置swig
app.set('view engine','html');
app.engine('html', swig.renderFile);

// 配置路由
app.get('/', function (req, res, next) {
  res.render('index');
});

// 容错机制
app.get('*', function (req, res, next) {
  res.status(404);
  res.end('404');
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('error...');
});

app.listen(3000, function () {
  console.log('Server is running...');
});
var express = require('express');
var app = express();
var swig = require('swig');

// 配置静态资源的访问路径
app.use(express.static('public'));
app.set('views','./views/');

// 配置swig
app.set('view engine','html');
app.engine('html', swig.renderFile);

// 配置路由
app.get('/', function (req, res, next) {
  res.render('index', {
    title: '首页'
  });
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

// 启动端口
app.listen(8088, function () {
  console.log('Server is running...');
});
/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
//express其实是一个函数
let express = require('express');
//application  应用
let app = express();
//app其实也是一个函数，上面定义很多的方法。get就是用来定义路由的
//app定义路由
//当客户端以GET方式，访问服务器/路由的时候，会由哪个函数来进行处理
app.get('/',function(req,res){
  res.end('home');
});
//当客户端以GET方式访问服务器/user路径的时候，会由哪个函数来进行处理
app.get('/user',function(req,res){
  res.end('user');
});
app.listen(8080);
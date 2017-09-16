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
/*app.post();
app.put();
app.delete();*/
// all 能匹配所有的方法，不管客户端请求过来的方法名是什么，都能匹配上
// * 代表所有的路径
app.all('*',function(req,res){
  res.end('Not Found');
});

app.listen(8080);
/**
app.listen = function listen(port) {
  var server = require('http').createServer(app);
  return server.listen.apply(server, port);

  require('http').createServer(app).listen(port);
};
 **/
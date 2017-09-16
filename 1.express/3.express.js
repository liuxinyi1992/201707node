/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let app = express();
app.get('/signup',function(req,res){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.end('注册');
});
app.get('/signin',function(req,res){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.end('登录');
});
app.get('/signout',function(req,res){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.end('退出');
});
app.listen(8080);
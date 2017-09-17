/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let session= require('express-session');
let app = express();
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zfpx'
}));
/**
 * 1.加token验证
 * 2.加验证码
 * 3. refer 来源
 */
app.get('/signin',function(req,res){
  console.log(req.headers.referer);
  req.session.ip =getClientIp(req);
  req.session.username = 'zfpx';
  req.session.amount = 100;
  res.send(`登录成功,余额${req.session.amount}`);
});
function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};
app.get('/signout',function(req,res){
  req.session.username = null;
  res.send(`退出成功`)
});
app.get('/eat',function(req,res){
  console.log(req.headers.referer);
  if(req.session.username){
    req.session.amount -= 20;
    res.send(`登录成功,余额${req.session.amount}`);
  }else{
    res.send(`你尚未登录，无法访问`);
  }
});


app.listen(8080);
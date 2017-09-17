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
app.get('/signin',function(req,res){
  req.session.username = 'zfpx';
  req.session.amount = 100;
  res.send(`登录成功,余额${req.session.amount}`);
});
app.get('/eat',function(req,res){
  if(req.session.username){
    req.session.amount -= 20;
    res.send(`登录成功,余额${req.session.amount}`);
  }else{
    res.send(`你尚未登录，无法访问`);
  }
});


app.listen(8080);
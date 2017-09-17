/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let session = require('express-session');
let app = express();
//当使用了此中间件之后，会在req增加一个session的属性，这个属性是一个对象，代表此客户端在服务器端对应的数据对象 req.session
app.use(session({
  resave:true,//每次请求的时候都重新保存session
  saveUninitialized:true,//保存未使用过的session
  secret:'zfpx'//加密的秘钥
}));
app.get('/opencard',function(req,res){
  req.session.amount = 1160;
  res.send(`开卡成功，你的余额是${req.session.amount}`);
});
app.get('/eat',function(req,res){
  req.session.amount -= 200;
  res.send(`你的余额是${req.session.amount}`);
});
//统计每个客户端访问的次数
app.get('/visit',function(req,res){
  let visit = req.session.visit;
  if(!visit)
    req.session.visit  = 1;
  else
    req.session.visit  += 1;
  res.send(`欢迎你的第${req.session.visit}次光临`);
});
app.listen(8080);
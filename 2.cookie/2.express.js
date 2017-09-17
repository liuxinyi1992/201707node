/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 如果在express读写cookie,cookie的参数
 **/
let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
//使用了此中间件后，会增加req.cookies
app.use(cookieParser());
app.get('/write',function(req,res){
  //cookie方法是express提供的，可以用来向客户端写入cookie
  //cookie的各种参数是用来限制cookie的发送时机的
  //指定域名之后就表示此cookie只有再向这个指定域名发请求的时候才会带上，否则 不会发送
  /*res.cookie('age',8,{
    domain:'a.zfpx.cn'
  });*/
  res.cookie('age',8,{
    path:'/read1'
  });
  res.send('ok');
});
app.get('/read1',function(req,res){
  res.send(req.cookies);
});
app.get('/read2',function(req,res){
  res.send(req.cookies);
});
app.get('/read',function(req,res){
  //name=zfpx; age=8; home=bj
  console.log(req.headers.cookie);
  //req.header.cookie;//age=8 {age:8}
  res.send(req.cookies);
});
//统计每个客户端的访问次数
app.get('/visit',function(req,res){
 //我们约定一个 visit
 let visit = req.cookies.visit;
 if(visit){
   visit++;
 }else{
   visit = 1;
 }
 res.cookie('visit',visit);
 res.send(`欢迎你的第${visit}次光临`);
});
app.listen(8080);
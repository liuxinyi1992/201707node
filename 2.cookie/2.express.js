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
  res.cookie('age',8);
  res.send('ok');
});
app.get('/read',function(req,res){
  //name=zfpx; age=8; home=bj
  console.log(req.headers.cookie);
  //req.header.cookie;//age=8 {age:8}
  res.send(req.cookies);
});
//统计每个客户端的访问次数
app.get('/visit',function(){

});
app.listen(8080);
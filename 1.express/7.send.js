/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * end只能接收字符串和Buffer
 * 但是我们希望很方便的传入任何类型
 */
let express = require('express');
//是第三方的中间件，专门用来解析请求体
//中间件模块返回的都是函数，执行这个函数返回的才是中间件
let bodyParser = require('body-parser');
let app = express();
//表单序列化格式 urlencoded   ?name=zfpx&age=9
//JSON   {"name":"zfpx","age":9}
// require("querystring").parse(); req.body
//此中间件的作用是获得请求体字符串，然后转成对象赋给req.body
//Content-Type:application/x-www-form-urlencoded
//
app.use(bodyParser.urlencoded({extended:true}));
//判断请求体的格式是不是json格式，如果是的话会调用JSON.parse方法把请求体字符串转成对象。req.body
app.use(bodyParser.json());
let statusCodes = {
  200:'OK',
  206:'Partial Content',//部分内容 下载
  301:'Moved Permanently',//永久重定向
  302:'Found',//临时重定向
  304:'Not Modified',//缓存发现
  400:'Bad Request', //客户端请求错误
  401:'Unauthorized',//未授权的
  403:'Forbidden',//无权访问
  404:'Not Found',//资源未找到
  500:'Internal Server Error', //服务器内部错误
  503:'Service Unavailable' //服务器暂时不可用
}
//添加公共的方法，可以接收任何类型的响应体
/*app.use(function(req,res,next){
  res.send = function(params){
 switch(typeof params){
 case 'object':
 params = JSON.stringify(params);//把对象转成字符串
 break;
 case 'number':
 res.statusCode = params;
 params = statusCodes[params];
 default:
 break;
 }
    res.end(params);
  }
  next();
});*/
let users = [];
// curl http://localhost:8080/users  获取用户数组
app.get('/users',function(req,res){
 res.send(users);
});
// post /users name=zfpx   增加一个用户
// curl -X POST --data '{"name":"zfpx"}' http://localhost:8080/users
app.post('/users',function(req,res){
  let buffers = [];
  req.on('data',function(data){//64K 1个汉字=3字节
    buffers.push(data);//把每次获取到的buffer全部添加数组里面
  });
  req.on('end',function(){
    //统一全转成字符串
    let result = Buffer.concat(buffers).toString();
    let user = JSON.parse(result);//把result从字符串转成对象
    user.id = Date.now();
    users.push(user);
    res.send(user);
  });
});
// curl -X POST -H "Content-Type:application/json" --data '{"name":"zfpx1"}' http://localhost:8080/users2
app.post('/users2',function(req,res){
  let user = req.body;
  user.id = Date.now();
  users.push(user);
  res.send(user);
});

app.use(function(req,res){
  //sendStatus
  res.send(200+'');
});
app.listen(8080);
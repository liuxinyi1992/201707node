/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 如何获取请求参数，服务器只有知道了客户端想要什么，才能更准确的响应
 请求部分
 请求行
 > GET /signup HTTP/1.1 请求方法 URL地址 协议/版本号
 请求头
 > Host: localhost:8080 主机
 > User-Agent: curl/7.53.0 用户代理
 > Accept: text/html 可能接收的响应类型
 > 这是一个空行，用来分隔请求头和请求体
 > 请求体

 响应部分
 响应行
 < HTTP/1.1 200 OK 协议/版本号 状态码 原因短语
 响应头
 < X-Powered-By: Express
 < Content-Type: text/html;charset=utf-8
  < Date: Sat, 16 Sep 2017 03:01:26 GMT
 < Connection: keep-alive
 < Content-Length: 6
 响应体
 { [6 bytes data]
*/
let express = require('express');
let app = express();
//路径参数 放在路径里面的参数
// http://localhost:8080/users/1/zfpx?id=1
// req.params 是请求对象 {id:1,name:'zfpx'}
// 什么是时候用路径传参？什么时候用?传参？
// 当一个参数是不可或缺的时候，用路径传参，当一个参数是可有可无的，可以放在？后面
// users?order=date&limit=8
app.get('/users/:id/:name',function(req,res){
   let id = req.params.id;
   console.log(req.params);
   res.end(''+id);
});
//路径的是路径名，不用匹配查询字符串 ?id=1
app.post('/users',function(req,res){
  console.log(req.method);
  //url地址包含路径名+查询字符串
  // http://localhost:8080/users?id=1
  console.log(req.url);// /users?id=1
  //此属性在原始的http的请求对象里是没有的，是express添加的属性
  console.log(req.path);///users 路径名
  //query也是原来没有，express添加的，是一个查询字符串对象
  console.log(req.query);//{id:1}
  // 是原生就有的
  console.log(req.headers);//请求头对象
  let str ='';
  //请求对象也是一个可读流对象，如果想获取流里的内容需要监听 data end
  req.on('data',function(data){
    str+=data;
  });
  req.on('end',function(){
    console.log(str);
  });
  //GET POST区别
  // GET没有请求体，POST有请求体
  res.end('ok');
});
app.listen(8080);












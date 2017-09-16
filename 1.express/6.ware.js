/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
/**
 * 1. 中间件执行过程中出错了如何处理？
 * 2. 中间件的作用
 *      1. 执行一些公用的逻辑和判断 比如说设置响应头和权限判断
 *      2. 为请求或响应对象添加一些公用的方法
 * @type {*}
 */
let app = express();
app.use(function(req,res,next){
  console.log(1);
  next();
});
app.use(function(req,res,next){
  console.log(2);
  try{
    let obj = JSON.parse('xx&dfdf');
  }catch(e){
    //如果在中间件里的代码执行出错了，会跳过后面所有的中间件和路由
    //next函数执行的时候如果传了不为NULL的参数，则表示任务出错了，会直接走错误处理中间件
    next(e);
  }
});
app.use(function(req,res,next){
  console.log(3);
  next();
});
app.get('/',function(req,res){
  res.end('ok');
});
//这是一个特殊的中间件，错误处理中间件。特殊在有四个参数，第一参数就是错误对象
app.use(function(err,req,res,next){
  console.log(err);
  res.end('error');
})
app.listen(8080);
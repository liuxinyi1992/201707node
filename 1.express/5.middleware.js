/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 中间件
 * 件其实也是一个函数
 * 在中间执行的函数
 **/
let express = require('express');
let app = express();
//如何定义中间件
//next是中间件函数中特有一个参数，也是一个函数
/*app.use(function(req,res,next){
 /!* console.log(1);
  //一种是继续向下走中间件或路由，一种是直接结束响应
  //res.end('ok');
  next();*!/
  console.log(1);
  //中间件里和路由里的请求响应对象只有一份
  res.setHeader('Content-Type','text/html;charset=utf-8');
  next();
 /!*setTimeout(function(){
   next()
 },5000)*!/
});
app.use(function(req,res,next){
  console.log(2);
  next();
});*/
/**
 * 单一职责原则，一个中间件尽量只干一件事
 */
function setContentType(req,res,next){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  next();
}
function logger(req,res,next){
  console.log(`${req.method} - ${req.path}`);
  next();
}
app.use(setContentType);
app.use(logger);
//匹配到路由之后，一定会终止请求。
app.get('/',function(req,res){
  res.end('首页')
});
app.get('/user',function(req,res){
  res.end('用户');
});
//处理404错误，如果没有一个路由能匹配的话，就会走到这个中间件里去。
app.use(function(req,res,next){
  res.end('页面未找到');
});
app.listen(8080);
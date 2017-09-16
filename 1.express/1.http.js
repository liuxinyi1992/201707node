/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let http = require('http');
/**
 *  / 主页
 *  /user 用户
 *  其它   页面未找到
 *  req可以读取请求中的内容
 *  res可以向客户端写入响应
 *  路由：根据客户端访问路径的不同返回不同的响应
 */
http.createServer(function(req,res){
  let url = req.url;//端口号和？中间的部分 http://localhost:8080/user
  //告诉浏览器用UTF8编码解决响应体
  res.setHeader('Content-Type','text/html;charset=utf-8');
  if(url == '/'){//如果客户端访问的是 /
    res.end('主页');
  }else if(url == '/user'){
    res.end('用户');
  }else{
    res.end('页面未找到');
  }
}).listen(8080);
/**
 * 1.所有的逻辑全部写在一个函数里，代码变得非常的臃肿
 * 2.修改和添加功能的时候会容易冲突。
 **/
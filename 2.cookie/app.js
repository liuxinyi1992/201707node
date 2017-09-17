/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let http = require('http');
http.createServer(function(req,res){
  //如果客户端发的路径是/write表示需要服务器向客户端种植cookie
 if(req.url == '/write'){
   //Set-Cookie:name=zfpx
  res.setHeader('Set-Cookie','name=zfpx');
  res.end('write ok');
 }else if(req.url == '/read'){
   //Cookie:name=zfpx
   let cookies = req.headers.cookie;
   console.log(cookies);
   res.end(cookies);
 }
}).listen(8080);
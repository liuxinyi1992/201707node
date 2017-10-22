let express = require('express');
let path = require('path');
let app = express();
app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});
let server = require('http').createServer(app);
//socket.io是依赖http服务器
let io = require('socket.io')(server);
//监听客户端的连接，当连接到来的时候执行此回调函数
io.on('connection',function(socket){
  //监听客户端的发过来的消息，当消息发过来的时候执行回调函数
 socket.on('message',function(data){
   console.log(data);
 });
});
server.listen(8080);

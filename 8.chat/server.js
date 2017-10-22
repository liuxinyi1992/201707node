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
   //向所有的客户端进行广播
   io.emit('message',data);
 });
});
server.listen(8080);

/**
 * 1.实现匿名聊天
 *   1. 在客户端里连接上服务器
 *   2. 给发送按钮绑定点击事件，当点击此按钮的时候先获取文本框的内容，把文本框的内容发送到后台
 *   3. 后台服务器把此消息广播给所有的客户端。
 *   4. 所有的客户端收到消息后把此消息在ul列表里显示出来
 **/

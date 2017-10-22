//先得到一个Server的实例
let Server = require('ws').Server;
//创建一个WebSocket服务器的实例
let server = new Server({port:8080});
//监听客户端的请求,当客户端连接上来后会执行对应的回调函数
//ws表示某个客户端的连接对象
server.on('connection',function(ws){
  console.log('服务器接收到了客户端的连接');
  //监听 客户端发过来的消息
  ws.on('message',function(data){
    console.log(data);
    ws.send('服务器回复:'+data);
  });
});


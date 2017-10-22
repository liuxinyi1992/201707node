let Websocket = require('ws');
let ws = new Websocket('ws://127.0.0.1:8080');
//当客户端成功连接上服务器之后会执行对应的回调函数
ws.on('open',function(){
  console.log('客户端连接成功');
  ws.send('服务器你好');
});
ws.on('message',function(data){
  console.log(data);
});
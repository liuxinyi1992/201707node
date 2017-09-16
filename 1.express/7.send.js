/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * end只能接收字符串和Buffer
 * 但是我们希望很方便的传入任何类型
 */
let express = require('express');
let app = express();
let users = [];
// curl http://localhost:8080/users  获取用户数组
app.get('/users',function(req,res){
 res.end(JSON.stringify(users));
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
    console.log(users);
    res.end(JSON.stringify(user));
  });
});

app.listen(8080);
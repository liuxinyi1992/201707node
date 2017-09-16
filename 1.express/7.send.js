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

});
// post /users name=zfpx   增加一个用户
// curl -X POST --data "name=zfpx" http://localhost:8080/users
app.post('/users',function(req,res){

});

app.listen(8080);
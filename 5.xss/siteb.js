/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let app = express();
app.get('/',function(req,res){
  let cookie = req.query.cookie;
  console.log(cookie);
  res.send(cookie);
});
app.listen(9090);
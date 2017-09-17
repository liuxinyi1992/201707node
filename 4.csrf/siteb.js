/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let path = require('path');
let app = express();

app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});
app.listen(9090);
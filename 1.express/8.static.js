/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
//静态文件中间件
let express = require('express');
let app = express();
let path = require('path');
//当客户端通过 get 方法访问 /react.png 的时候，返回对应的图片给客户端
//TypeError: path must be absolute or specify root to res.sendFile
//类型错误：路径必须是绝对的或者提供一个root
//使用一个静态文件中间件，以public目录作为静态文件根文件
//在3.X版本里，express内嵌了20多个中间件，但是在最新的4.X里，只保留了一个express.static
function static(root){

}
app.use(static(path.resolve('public')));
/*app.get('/react.png', function (req, res) {
  res.sendFile(path.resolve(`./public${req.path}`));
});
app.get('/route.png', function (req, res) {
  res.sendFile(path.resolve(`./public${req.path}`));
});*/
app.listen(8080);
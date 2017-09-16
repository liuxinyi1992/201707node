/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
//分类 把不同的类型的路由写在不同的路由文件里
/**
 *  / 首页
 *  /user/signup 注册
 *  /user/signin 登录
 *  /user/signout 退出
 *
 *  /article/add 新增文章
 * @type {*}
 */
let app = express();
let index = require('./routes/index');
let user = require('./routes/user');
//如果客户端请求的路径是以/开头的话，会交给index这个路由中间件来处理
app.use('/',index);
//如果客户端请求的路径是以/user开头的话，会交给user这个路由中间件去处理 /user/signup
app.use('/user',user);
app.listen(8080);
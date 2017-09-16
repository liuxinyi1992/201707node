/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
//工厂方法，调用它就可以生成它的实例-路由中间件的实例
let router = express.Router();
//router其实是一个小型app
router.get('/',function(req,res){
  res.send('首页');
});
module.exports = router;
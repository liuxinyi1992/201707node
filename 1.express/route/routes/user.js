/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
let express = require('express');
let router = express.Router();
//此处写的路径是指的是URL的后缀，是完整的URL路径去掉前缀后的路径
//
router.get('/signup',function(req,res){
 res.send('注册');
});
router.get('/signin',function(req,res){
  res.send('登录');
});
router.get('/signout',function(req,res){
  res.send('退出');
});
module.exports = router;
/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 模板是一个静态文件，里面会包含静态代码和动态的变量
 * 渲染模板 就是把模板里的变量有真正的值替换掉
 **/
let express = require('express');
let app = express();
let path = require('path');
//如果要想在express中使用模板，设置以下步骤
//因为模板有很多种，需要告诉express模板的格式是什么
app.set('view engine','ejs');
//设置模板的存放目录,需要提供模板文件的绝对路径
app.set('views',path.resolve('views'));
let users = [];
//当客户端以GET方式向服务器/signup路径发起请求的时候
app.get('/signup',function(req,res){
 //渲染或者说显示模板的时候我们只会给一个相对路径
  /**
   * 参数1是要渲染的模板的相对路径,不能以/开头
   * 参数2是数据源，其实是一个对象，它的属性将被用来替换模板里的变量
   * 1.根据相对路径结合着模板根目录的绝对路径找到模板的绝对路径
   * 2.根据此绝对路径从硬盘上把此模板的内容读到内存里
   * 3.把模板里的变量部分把数据源对象对应的同名属性值替换掉
   * 4.把替换后的字符串作为响应体发给浏览器
   */
  res.render('signup',{title:'用户注册'});
});
app.post('/signup',function(){

});
app.listen(8080);
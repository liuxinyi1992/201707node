/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 模板是一个静态文件，里面会包含静态代码和动态的变量
 * 渲染模板 就是把模板里的变量有真正的值替换掉
 **/
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let path = require('path');
//如果要想在express中使用模板，设置以下步骤
//因为模板有很多种，需要告诉express模板的格式是什么
app.set('view engine','html');
//设置模板的存放目录,需要提供模板文件的绝对路径
app.set('views',path.resolve('views'));
let session = require('express-session');
//设置模板的渲染方式还是为ejs
app.engine('html',require('ejs').__express);
let users = [];
//true意味着在把字符串转成对象的时候用qs,否则用querystring
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  resave:true,//每次请求的时候都重新保存session
  saveUninitialized:true,//保存未使用过的session
  secret:'zfpx'//加密的秘钥
}));
function checkLogin(req,res,next){
  if(req.session.username){
    next();
  }else{
    res.redirect('/signin');
  }
}
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
  //let error = req.cookies.error;
  let error = req.session.error;
  //此处读完error之后要立刻清除cookie
  //res.clearCookie('error');
  req.session.error = null;
  res.render('signup',{title:'用户注册',error});
});
//把用户提交过来的用户放到users数组中，注意判断用户名不能重复
app.post('/signup',function(req,res){
 let user = req.body;//得到bodyParser解析得到的请求体
 let oldUser = users.find(item=>item.username == user.username);//找一找原来的用户数组中有没有跟本次提交过来的用户名相同的用户
 if(oldUser){
   //如果失败了，向客户端种植cookie
   //res.cookie('error','用户名已经被占用,请重新填写!');
   req.session.error = '用户名已经被占用,请重新填写!';
   res.redirect('back');
 }else{
   users.push(user);//注册成功
   //res.send('注册成功');// res.end
   //重定向指让客户端向另外一个地址发送请求
   res.redirect('/signin');//res.end
 }
});
app.get('/signin',function(req,res){
  /*let error = req.cookies.error;
  res.clearCookie('error');*/
  let error = req.session.error;
  req.session.error = undefined;
  res.render('signin',{title:'用户登录',error});
});
app.post('/signin',function(req,res){
  let user = req.body;//得到bodyParser解析得到的请求体
  let oldUser = users.find(item=>item.username == user.username && item.password == user.password);
  if(oldUser){
    // //如果登录成功，则渲染用户主页面
    // res.render('user',{title:'用户页',username:user.username});
    //res.cookie('username',user.username);
    //在登录成功之后向会话对象中添加一个username属性
    req.session.username = user.username;
    res.redirect('/user');
  }else{
    //res.cookie('error','用户或密码输入错误，请重新输入');
    req.session.error = '用户或密码输入错误，请重新输入';
    res.redirect('back');//返回上一个页
  }
});
app.get('/signout',checkLogin,function(req,res){
  //只要把会话对象中的username属性删除即可
   req.session.username = null;
   res.redirect('/signin');
});

//用户的个人信息页面
app.get('/user',checkLogin,function(req,res){
  res.render('user',{title:'用户主页',username:req.session.username});
});
//自己实现一个登录功能 /signin   /
app.listen(8080);
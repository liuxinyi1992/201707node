//引入mongoose模块
let mongoose = require('mongoose');
//连接数据库,输入目标数据的地址，返回一个连接对象
let connection = mongoose.createConnection('mongodb://127.0.0.1/201707node');
//Schema就是集合的骨架模型，可以通过它指定集合中文档的属性名和属性值的类型
let UserSchema = new mongoose.Schema({
  name:String,
  age:Number
},{
  collection:'user' //指定数据库的集合名称
});
//模型,通过它可以操作数据库
let UserModel = connection.model('User',UserSchema);
/**
 * _id 唯一标识
 * __v 版本号，是用来解决并发问题的
 */
UserModel.create({
  name:'zfpx1',
  age:1
},function(err,doc){
  console.log(err);
  console.log(doc);//返回的是保存成功之后的文档对象
});

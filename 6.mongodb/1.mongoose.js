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
let users = [];
for(let i=1;i<=10;i++){
  users.push({name:'zfpx'+i,age:i});
}
/**
 * _id 唯一标识 ObjectId 对象ID类型
 * __v 版本号，是用来解决并发问题的
 * 准备10条数据进行后续操作
 */
/*UserModel.create(users,function(err,doc){
  console.log(err);
  console.log(doc._id);//并不是字符串
  console.log(doc);//返回的是保存成功之后的文档对象
});*/
/**
 * 1参数 代表查询的条件
 * age>4   {age:{$gt:4}}
 * age<=4  {age:{$lte:4}}
 * 2参数是存放过滤的字段
 * age:1表示只返回age字段
 * age:0 表示只排除age字段，显示除age之外的其它字段
 * Can't canonicalize query
 * BadValue Projection cannot have a mix of inclusion and exclusion.
 *
 */
UserModel.find({age:{$lte:4}},{name:0,age:1},function(err,docs){
  console.log(err);
  console.log(docs);
});

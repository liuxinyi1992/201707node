//引入mongoose模块
let mongoose = require('mongoose');
mongoose.Promise = Promise;
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
// UserModel.create(users,function(err,doc){
//   console.log(err);
//   console.log(doc._id);//并不是字符串
//   console.log(doc);//返回的是保存成功之后的文档对象
// });
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
/*UserModel.find({age:{$lte:4}},{name:0,age:1},function(err,docs){
  console.log(err);
  console.log(docs);
});*/
/**
 * 更新操作
 * 1参数是更新的条件
 * 2参数是更新后的值
 * { ok: 1, nModified: 1, n: 1 }
 * 1代表更新成功
 * n代表匹配的条数
 * nModified 代表实际发生修改的条数
 * { ok: 1, nModified: 1, n: 1 }
 * 更新的时候默认只更新第一个
 * 加上multi:true之后会更新所有的匹配到的数据
 * { ok: 1, nModified: 2, n: 2 }
 */
/*UserModel.update({age:300},{age:300},{multi:true},function(err,result){
  console.log(result);
});*/

/*
UserModel.remove({},function(err,result){
  console.log(err);
  //{ ok: 1, n: 2 } n表示删除的行数 ok:1表示删除成功
  console.log(result.result);
});*/
//  1 2 3 4 5 6 7 8 9 10
//
let pageNum = 2;
let pageSize = 3;
//skip跳过指定的条数 limit限定返回的总条数
//只是用于设置条件，查询请求并没有真正发出
//只有当调用exec的时候才会真正发出请求
//mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
// sort 排定排序的字段 1代表升序 -1 倒序
UserModel.find({}).sort({age:-1}).skip(3).limit(3).exec(function(err,docs){
  console.log(err);
  console.log(docs);
});

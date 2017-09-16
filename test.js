// url encoded
/*let name = '中';
console.log(new Buffer(name));;*/

let querystring = require('querystring');
//qs更强大。可以支持内嵌数组或对象
let qs = require('qs');
let obj = {name:'zfpx',age:9,home:{city:'北京'}};
let str = qs.stringify(obj);
console.log(str);
let obj2 = qs.parse(str);
console.log(obj2);

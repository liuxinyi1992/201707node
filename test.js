// url encoded
/*let name = '中';
console.log(new Buffer(name));;*/

let querystring = require('querystring');
let obj = {name:'zfpx',age:9};
let str = querystring.stringify(obj);
console.log(str);
let obj2 = querystring.parse(str);
console.log(obj2);

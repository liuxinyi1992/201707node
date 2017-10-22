let express = require('express');
let app = express();
app.get('/clock',function(req,res){
 res.header('Access-Control-Allow-Origin','*');
 res.send(new Date().toLocaleString());
});
app.listen(8080);
var http = require('http');

var server = http.createServer(function(req,res){
 res.write('hello Everyone');
 res.end();
})

server.listen(3002);
console.log('The server is runnning');


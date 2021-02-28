var http = require("http");
 
var server  = http.createServer(function(req,res){
    if(req.url == "/"){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h2>Hello Web Pager </h2>');
        res.end();
    }else if(req.url='/user'){
        res.write('Welcome to user Page?');
        res.end();
    }
})

server.listen(3005);
console.log('The server is running a port 3000!');
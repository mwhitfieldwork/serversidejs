var http = require('http');
;var fs = require('fs');

var server = http.createServer(function(req,res){
 if(req.url == '/'){
     res.writeHead(200,{'content-type': 'text/html'})
     res.write('<h2>hello Everyone</h2>');
 res.end();
 }else if (req.url == '/user'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('</h1>hello User</h>');
    res.end();    
 }else if (req.url == '/admin'){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write('<h1>hello Admin</h1>');
    res.end();    
 } else if (req.url == '/data'){
    res.writeHead(200,{'content-type': 'application/json'})
    res.write('{"message"}: "This is a JSOn response"');
    res.end();    
 }else if (req.url == '/customer'){
    res.setHeader('content-type', 'text/html');
    res.writeHead(200);
    res.write('<h1>hello Admin</h1>');
    res.end();
 } else if (req.url == '/csv'){
    res.setHeader('content-type', 'text/csv');
    res.setHeader("Content-disposition", "attachment;filename=data.csv")
    res.writeHead(200);
    res.write(`id,name,email\n 1, King Data, king@abc.com`);
    res.end();
 }else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>Page Not Found</h1>');
    res.end();   
 }
})

server.listen(3002);
console.log('The server is runnning');
var http = require('http');
http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type': 'Text/html'});
    res.end('<h1>Hello Class: This is Seconds Server Page<h1>');
}).listen(8080);

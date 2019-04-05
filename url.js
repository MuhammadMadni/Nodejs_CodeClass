var http = require('http');
var url = require('url');

http.createServer(function(req,res){
res.writeHead(200,{'content_Type' : 'text/html'});
var q =url.parse(req.url,true).query;                                //query string parse
var dates= q.year + " " + q.month;
res.end(dates);
}).listen(8080);                                      
                                                  //http://localhost:8080/?year=2010&month=jan
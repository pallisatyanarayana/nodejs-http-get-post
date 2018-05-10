 var http=require('http');
var port=8500;
var app=http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("Hello print satya");
    res.end("yes");
});
app.listen(port,"127.0.0.2");





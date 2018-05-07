var http=require('http');
// var assert=require('assert');
// assert(5<7);
var port=9000;
var app=http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("Hello Node");
});
app.listen(port,function()
{
    console.log("listening port = "+port);
});
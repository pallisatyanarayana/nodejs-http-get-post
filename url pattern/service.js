var http=require('http');
var url=require('url');
var fs=require('fs');
var port=5000;

var app=http.createServer(function(req,res)
{
    var q=url.parse(req.url,true);
    var path="."+q.pathname;
    
    fs.readFile(path,function(err,data)
{
    if(err)
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.write("404 error occured");
        console.log("404 error occured");
        return res.end("404 Not Found");
    }
    
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        return res.end();
    
  
});
});
app.listen(port,function()
{
    console.log("listening port = "+port);
});
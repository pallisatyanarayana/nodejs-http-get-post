var http=require('http');
var fs=require('fs');
var port=9002;

var app=http.createServer(function(req,res)
{
    fs.readFile("index.html",function(err,data)
    {
        if(err)
        {
            console.log("Error occured");
        }
        else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        }

    });
});
app.listen(port,function()
{
    console.log("app listening " +port);
});
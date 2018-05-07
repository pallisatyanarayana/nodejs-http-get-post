var http=require("http");
var dt=require("./myModule.js");
var port=9001;

var app=http.createServer(function(req,res)
{
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("the data and time  = "+dt.myDataTime());
    res.write(req.url);
    res.end();
});
app.listen(port,function()
{
    console.log("listening port = "+port);
});


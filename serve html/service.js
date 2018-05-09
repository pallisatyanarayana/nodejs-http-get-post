var http=require('http');
var fs=require('fs');
var port=9020;
var server=http.createServer(function(req,res)
{
    
    console.log("The getting url = "+req.url);

    if(req.url==='/home' || req.url==='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/attack/index.html').pipe(res);
    }
    else 
    if(req.url==='/contact' || req.url==='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else 
    if(req.url==='/about' || req.url==='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else 
    if(req.url==='/sample' || req.url==='/')
    {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
});

server.listen(port,function()
{
    console.log('server listening... '+port);
});
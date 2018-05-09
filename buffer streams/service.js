var http=require('http');
var port=8089;
var fs=require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/sample.txt','utf-8');
// var mywriteStream=fs.createWriteStream(__dirname+'/writeSample.txt','utf-8');


// myReadStream.on('data',function(chunk)
// {
//     console.log("yes data is readed");
//     mywriteStream.write(chunk);
//     console.log(chunk);
// });

var app=http.createServer(function(req,res)
{
    res.writeHead(200,{'Contenty-type':'text/html'});
    var myreadStream=fs.createReadStream(__dirname+'/sample.txt','utf-8');
    var mywriteStream=fs.createWriteStream(__dirname+'/writedata.txt');
    
    myreadStream.pipe(res);
  //  res.end();
});
app.listen(port,function()
{
    console.log("Listening port  = "+port);
});
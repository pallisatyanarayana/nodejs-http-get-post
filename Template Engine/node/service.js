var express=require('express');

var port=9800;
var app=express();

app.get('/home',function(req,res)
{
    res.sendfile(__dirname+'/home.html');
    
});
app.get('/about',function(req,res)
{
    res.sendfile(__dirname+'/about.html');
    
});
app.get('/contact/:id',function(req,res)
{
    res.sendfile(__dirname+'/contact.html');
    
});

app.listen(port,function()
{
    console.log('It is listening port ...'+port);
});
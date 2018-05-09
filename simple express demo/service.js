var express=require('express');

var app=express();
var port=9800;

app.get('/home/',function(req,res)
{
    res.sendfile(__dirname+'/home.html');
});

app.get('/contact/',function(req,res)
{
    res.sendfile(__dirname+'/contact.html');
});
app.get('/profile/:id',function(req,res)
{
    res.send('Your profile id = '+req.params.id);
});

app.listen(port,function()
{
    console.log("It is listening on port... "+port);
});
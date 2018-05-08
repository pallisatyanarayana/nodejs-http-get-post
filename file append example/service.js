var http=require("http");
var port=9004;
var fs=require("fs");

var app=http.createServer(function(req,res)
{
    fs.readFile("sample.txt",function(err,data)
    {
        if(err)
        {
            console.log("Error occured..");
        }
        else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
            }
        });
  

    fs.appendFile("sample.txt","       I am added now by using appendFile method",function(err)
    {
        if(err)throw error
        {
            console.log("while appending error occured..")
        }
    });



    fs.readFile("sample.txt",function(err,data)
    {
        if(err)
        {
            console.log("Error occured..");
        }
        else{
             res.writeHead(200,{"Content-type":"text/html"});
             res.write("</br>");
            res.write(data);
            res.end();
            }
        });



});

app.listen(port,function()
{
    console.log("listening port "+port); 
});
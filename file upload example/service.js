var http=require('http');
var fs = require('fs');

var app=http.createServer(function(req,res)
{
    var data = {}
    data.table = []
    for (i=0; i <26 ; i++){
       var obj = {
           id: i,
           square: i * i
       }
       data.table.push(obj)
    }
    fs.writeFile ("index.json", JSON.stringify(data), function(err,data) {
        if (err)
        {
            console.log("error occured");
        }
        else{
            console.log('complete');

            res.write(data);
            res.end();
        }
        
        }
    );
});

app.listen(9003,function()
{
    console.log("listening on 9003");
})


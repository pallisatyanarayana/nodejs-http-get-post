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
    fs.writeFile ("input.json", JSON.stringify(data), function(err,data) {
        if (err) throw err;
        console.log('complete');

        res.write(data);
        res.end();
        }
    );
});

app.listen(9003,function()
{
    console.log("listening on 9003");
})


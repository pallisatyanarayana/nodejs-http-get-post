var fs=require('fs');

// fs.readFile('sample.txt','utf-8',function(err,data)
// {
//    fs.writeFile("nothing.txt",data);
// });

// fs.unlink('nothing.txt');

fs.mkdir('sample',function()
{
    fs.readFile("sample.txt",function(err,data)
{
    fs.writeFile('./sample/nothing.txt',data);
});
});
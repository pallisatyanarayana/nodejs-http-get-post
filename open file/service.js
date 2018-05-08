

var fs=require('fs');
// fs.open('satya.txt','w',function(err,file)
// {
//     if(err)throw err;
    
//         console.log("saved..");
    
// });

// fs.writeFile("satya.txt","Hello i am writed in satyanaryana file ",function(err,file)
// {
//     if(err)throw err;
//     console.log("wrote..");
// });

// fs.appendFile("satya.txt","  yes append the data",function(err)
// {
//     if(err)throw err;
//     console.log("yes appended...");
// });


fs.unlink("satya.txt",function(err)
{
    if(err)throw err;
    console.log("deleted..");
});
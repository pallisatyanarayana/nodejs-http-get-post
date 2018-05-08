// module.exports.emp=function(name)
// {
//     return "the employee name is = "+name;
// }

// module.exports.add=function(a,b)
// {
//     return `the two values of addition = ${a+b}`;
// }

// module.exports.pi=3.142;

var emp=function(name)
{
    return "the employee name is = "+name;
}

var add=function(a,b)
{
    return `the two values of addition = ${a+b}`;
}

var pi=3.142;

module.exports={

    emp:emp,
    add:add,
    pi:pi
}

// module.exports.emp=emp;
// module.exports.add=add;
// module.exports.pi=pi;


 var event=require('events');

 var emitter=new event.EventEmitter();

var myEventHandler=function()
{
    console.log("I hear a scream");
}

 emitter.on('scream',myEventHandler);

 emitter.emit('scream');
//var events = require('events');
//var eventEmitter = new events.EventEmitter();

//Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

//Assign the eventhandler to an event:
//eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
//eventEmitter.emit('scream');

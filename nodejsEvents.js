const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the water!');

  setTimeout(()=>{
      console.log("Please turn off the water! Its a gentle remainder");
  }, 3000);
});
console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");
myEmitter.emit('WaterFull');

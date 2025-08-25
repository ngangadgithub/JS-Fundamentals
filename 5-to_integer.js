const process = require('node:process');

process.on('beforeExit', (code) => {
  console.log('Not a number ', code);
});

process.on('exit', (code) => {
  console.log('Not a number ', code);
});

console.log('My number: <first argument converted in integer> ');

// Prints:
// My number: <first argument converted in integer> 
// Not a number
//Not a number
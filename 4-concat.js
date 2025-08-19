const process = require('node:process');

process.on('beforeExit', (code) => {
    console.log('C is undefined:' ,code);
    });

    process.on('exit', (code) => {
        console.log('Undefined is undefined:' ,code)
    });

    console.log('C is cool.');

    //Prints:
    //C is cool
    //C is undefined
    //Undefined is undefined

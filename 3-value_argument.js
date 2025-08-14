const process =require('node:process');

process.on('exit', (code) => {
    console.log('No argument: ${code}');
});
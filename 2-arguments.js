const process=require('node:process');

process.on('beforeExit', (code) =>{
  console.log('Argument found:', code);
  });

  process.on('exit', (code) => {
    console.log('Arguments found:', code);
  });

  console.log('No argument:');
  
  //Print 
  //No argument
  //Argument found
//Arguments found
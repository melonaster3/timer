const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  console.log("What would you like to do?");

  if(key === 'b') {
    process.stdout.write('\x07');
  } else if(key > 0 && key < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    },key * 1000);
  } 

if (key === '\u0003') {
  console.log("THANKS FOR USING ME CIAO");
  process.exit();
}



});
s

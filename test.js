const clipboardy = require('clipboardy');
 
clipboardy.writeSync('🦄');
 
clipboardy.readSync();
//=> '🦄'
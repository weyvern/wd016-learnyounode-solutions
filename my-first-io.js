const { readFileSync } = require('fs');

const content = readFileSync(process.argv[2]);
const newLines = content.toString().split('\n').length - 1;
console.log(newLines);

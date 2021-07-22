const { readdir } = require('fs');
const { extname } = require('path');

const dirToRead = process.argv[2];
const filterExt = '.' + process.argv[3];

const callback = (err, files) => {
  if (err) throw err;
  files.forEach(file => extname(file) === filterExt && console.log(file));
};

readdir(dirToRead, callback);

const filterFunc = require('./mymodule');
const dirToRead = process.argv[2];
const filterExt = process.argv[3];

const cb = (err, files) => {
  if (err) {
    return console.log(err);
  }
  files.forEach(file => console.log(file));
};

filterFunc(dirToRead, filterExt, cb);

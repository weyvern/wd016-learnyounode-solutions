const { readFile } = require('fs');

const callback = (err, data) => {
  if (err) throw err;
  console.log(data.toString().split('\n').length - 1);
};

readFile(process.argv[2], callback);

const fs = require('fs');
const { extname } = require('path');

module.exports = function (dir, filter, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    const matches = files.filter(file => extname(file) === '.' + filter);
    callback(null, matches);
  });
};

const path = require('path');
const fs = require('fs-extra');

exports.onPostBuild = function() {
  fs.move(path.join(__dirname, 'public'), path.join(__dirname, '..'));
};

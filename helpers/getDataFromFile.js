const fs = require('fs');

function getDataFromFile(file) {
  const filePath = new URL("file:///" + file);
  return fs.readFileSync(filePath, {encoding: "UTF-8"});
};

module.exports = getDataFromFile;

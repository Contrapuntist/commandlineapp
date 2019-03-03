const fs = require('fs');

function getDataFromFile(file) {
  console.log('in getdatafromfile');
  const filePath = new URL("file:///" + file);
  const result = fs.readFileSync(filePath, {encoding: "UTF-8"});
  return result;
};

module.exports = getDataFromFile;

const fs = require('fs');
const { parseData } = require('./helpers/parseData.js');
const getDataFromFile = require('./helpers/getDataFromFile.js');

//get input strings from process.argv
const fileListInput = process.argv.slice(2);

// collect data from files and add to array
const dataFromAllFiles = []
fileListInput.forEach(file => {
  dataFromAllFiles.push(getDataFromFile(file));
});

/** 
 * Parse all the data from files and convert into array of objects. 
 * Each line from imported files turned into its own object.  
 */
const getParsedData = Promise.resolve(dataFromAllFiles.map(data => parseData(data))[0]);


getParsedData.then(result => console.log('promised results', result))





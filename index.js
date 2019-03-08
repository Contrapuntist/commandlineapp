const express = require('express'); 
const bodyParser = require('body-parser');

const { parseData } = require('./helpers/parseData');
const getDataFromFile = require('./helpers/getDataFromFile');
const { sortbyGender, sortBybirthDate, sortByLastName_desc } = require('./helpers/sort');
const displayInConsole = require('./helpers/displayInConsole');
const { records, birthdate, gender, name } = require('./routes');

// create server instance
const app = express(); 
// set port for server
const PORT = 3000;
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
const appData = Promise.resolve(dataFromAllFiles.map(data => parseData(data))[0]);

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
if (fileListInput.length > 0 ) {
  appData.then(data => {
    displayInConsole(sortbyGender(data), 'Data sorted by gender');
    displayInConsole(sortBybirthDate(data), 'Data sorted by birthdate');
    displayInConsole(sortByLastName_desc(data), 'Data sorted by name');

    serverStart(data);
  
  });
} else {
  serverStart();
}

function serverStart( data = [] ) {
  app.post('/records', records(data));
  app.get('/records/birthdate', birthdate(data));
  app.get('/records/gender', gender(data));
  app.get('/records/name', name(data));

  app.listen(PORT, function(){
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  }); 
}
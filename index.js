const fs = require('fs');
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const port = 3000; 
const { parseData } = require('./helpers/parseData');
const getDataFromFile = require('./helpers/getDataFromFile');
const { sortbyGender, sortBybirthDate, sortByLastName_desc } = require('./helpers/sort');
const displayInConsole = require('./helpers/displayInConsole');

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 

app.post('/records', function(req, res) {
  console.log('body', req.body.data);
  appData.push(req.body.data);
	res.send(appData);
});

app.get('/records/birthdate', function(req, res) {
  const responseData = sortBybirthDate(appData); 
  res.send(responseData);
});

app.get('/records/gender', function(req, res) {
  const responseData = sortbyGender(appData);
  res.send(responseData);
});

app.get('/records/name', function(req, res) {
  res.send(sortByLastName_desc(appData));
});

app.listen(port, function(){
	console.log(`🌎 ==> Server now on port ${port}!`);
}); 

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
const appData = dataFromAllFiles.map(data => parseData(data))[0];
//appData.then(result => console.log('promised results', result.sort((obj1, obj2) => obj1.gender > obj2.gender )));

//sortbyGender, sortBybirthDate, sortByLastName_desc
displayInConsole(sortbyGender(appData), 'Data sorted by gender');
displayInConsole(sortBybirthDate(appData), 'Data sorted by birthdate');
displayInConsole(sortByLastName_desc(appData), 'Data sorted by name');

function parseData(data) {
  const splitByLine = data.split(/\r\n|\r|\n/);
  const parsedData = []
  splitByLine.forEach(line => {
    if(line !== '') {
      const lineInArr = splitLine(line);
      parsedData.push(createDataObject(lineInArr));
    }
  });
  
  return parsedData.map(arr => arr);
}

function splitLine(line) {
  if (line.includes(',')) {
    return line.split(',');
  } else if (line.includes('|')) {
    return line.split('|');
  } else {
    return line.split(' ')
  }
}

function createDataObject(arr) {
  if (arr.length > 4) {
    return { 
      lastName: arr[0].trim(),
      firstName: arr[1].trim(),
      gender: arr[2].trim(),
      favoriteColor: arr[3].trim(),
      birthDate: arr[4].trim()
    };
  } else {
    console.log(`data does not have appropriate number of expected values: ${arr}`)
  }
}

module.exports = {
  parseData,
  splitLine,
  createDataObject
};


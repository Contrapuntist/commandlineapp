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
  return { 
    lastName: arr[0],
    firstName: arr[1],
    gender: arr[2],
    favoriteColor: arr[3],
    birthDate: arr[4]
  };
}

module.exports = {
  parseData,
  splitLine,
  createDataObject
};


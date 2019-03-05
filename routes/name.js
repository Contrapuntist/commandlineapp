const { sortByLastName_desc } = require('../helpers/sort');

function name(data) {
  return (req, res) => {
    const responseData = sortByLastName_desc(data); 
    res.send(responseData);
  }
}

module.exports = name;
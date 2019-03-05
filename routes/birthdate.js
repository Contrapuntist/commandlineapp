const {sortBybirthDate} = require('../helpers/sort');

function birthdate(data) {
  return (req, res) => {
    const responseData = sortBybirthDate(data); 
    res.send(responseData);
  }
}

module.exports = birthdate;
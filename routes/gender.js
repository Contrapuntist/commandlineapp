const { sortbyGender } = require('../helpers/sort');


function gender(data) {
  return (req, res) => {
  const responseData = sortbyGender(data);
  res.send(responseData);
  }
}

module.exports = gender;
const { sortbyGender } = require('../helpers/sort');


function gender(data) {
  return (req, res) => {
  const responseData = sortbyGender(appData);
  res.send(responseData);
  }
}

module.exports = gender;
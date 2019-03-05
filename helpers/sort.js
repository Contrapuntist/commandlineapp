function sortbyGender (arr) {
  return arr.sort((obj1, obj2) => {
    if (obj1.gender === obj2.gender ) {
      return obj1.lastName > obj2.lastName; 
    }
    return obj1.gender > obj2.gender 
  }
)}

function sortBybirthDate (arr) {
  return arr.sort((obj1, obj2) => {
    obj1date = obj1.birthDate.split('/');
    obj2date = obj2.birthDate.split('/');
    if (parseInt(obj1date[2])  === parseInt(obj2date[2])) {
      if (parseInt(obj1date[0])  === parseInt(obj2date[0])) {
        return parseInt(obj1date[1]) > parseInt(obj2date[1]);
      }
      return parseInt(obj1date[0]) > parseInt(obj2date[0]);
    }
    return parseInt(obj1date[2]) > parseInt(obj2date[2]);
  })
}

function sortByLastName_desc (arr) {
  return arr.sort((obj1, obj2) => obj2.lastName > obj1.lastName )
}

module.exports = {
  sortbyGender,
  sortBybirthDate,
  sortByLastName_desc
} 

//sort((obj1, obj2) => obj2.lastName > obj1.lastName )
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
    console.log('obj 1 date', obj1date);
    console.log('obj 2 date', obj2date);
    if (parseInt(obj1date[2])  === parseInt(obj2date[2])) {
      console.log('equal years', parseInt(obj1date[2]), parseInt(obj2date[2]));
      if (parseInt(obj1date[0])  === parseInt(obj2date[0])) {
        console.log('equal months', parseInt(obj1date[2]), parseInt(obj2date[2]));
        return parseInt(obj1date[1]) > parseInt(obj2date[1]);
      }
      return parseInt(obj1date[0]) > parseInt(obj2date[0]);
    }
    console.log('comparing year', parseInt(obj1date[2]), parseInt(obj2date[2]))
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


// var sortByProperty = function (property) {
//   return function (x, y) {
//       return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
//   };
// };
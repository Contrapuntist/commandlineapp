function displayInConsole(arr, message) {
  console.log();
  console.log(`========= ${message} ==========`);
  arr.forEach(obj => {
    console.log(`${obj.lastName}, ${obj.firstName}, ${obj.gender}, ${obj.favoriteColor}, ${obj.birthDate}`);
  });
};

module.exports = displayInConsole;

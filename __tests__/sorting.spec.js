const { sortbyGender, sortBybirthDate, sortByLastName_desc } = require('../helpers/sort');

describe('Sorting functions -- ', () => {
  const data = [
    {
      "lastName": "gomez",
      "firstName": "maria",
      "gender": "female",
      "favoriteColor": "red",
      "birthDate": "5/5/1990"
    },
    {
      "lastName": "chen",
      "firstName": "jin",
      "gender": "male",
      "favoriteColor": "royal blue",
      "birthDate": "3/21/2001"
    },
    {
      "lastName": "storm",
      "firstName": "mick",
      "gender": "male",
      "favoriteColor": "orange",
      "birthDate": "2/3/1965"
    },
    {
      "lastName": "kelp",
      "firstName": "fred",
      "gender": "male",
      "favoriteColor": "black",
      "birthDate": "12/12/1974"
    },
    {
      "lastName": "zen",
      "firstName": "edgar",
      "gender": "male",
      "favoriteColor": "purple",
      "birthDate": "9/25/1951"
    },
    {
      "lastName": "gomez",
      "firstName": "maria",
      "gender": "female",
      "favoriteColor": "red",
      "birthDate": "5/5/1990"
    },
    {
      "lastName": "barnum",
      "firstName": "trent",
      "gender": "male",
      "favoriteColor": "red",
      "birthDate": "11/6/1975"
    },
    {
      "lastName": "blair",
      "firstName": "wilma",
      "gender": "female",
      "favoriteColor": "pink",
      "birthDate": "2/3/1990"
    }
  ];

  it('Sort by gender', () => {
    const sortedData = sortbyGender(data);
    expect(sortedData).toHaveLength(8);
    expect(sortedData[0].lastName).toBe('blair');
    expect(sortedData[0].gender).toBe('female');
  });

  it('Sort by birthdate', () => {
    const sortedData = sortBybirthDate(data);
    expect(sortedData[0].birthDate).toBe('9/25/1951');
  });

  it('Sort by name -- descending order', () => {
    const sortedData = sortByLastName_desc(data);
    expect(sortedData[0].lastName).toBe('zen');
  });

})
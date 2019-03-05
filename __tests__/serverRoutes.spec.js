const express = require('express'); 
const request = require('supertest');
const { sortbyGender, sortBybirthDate, sortByLastName_desc } = require('../helpers/sort');
const { records, birthdate, gender, name } = require('../routes');

describe('Server routes', () => {
  const appData = [
    {
      "lastName": "chen",
      "firstName": "jin",
      "gender": "male",
      "favoriteColor": "royal blue",
      "birthDate": "3/21/2001"
    },
    {
      "lastName": "gomez",
      "firstName": "maria",
      "gender": "female",
      "favoriteColor": "red",
      "birthDate": "5/5/1990"
    },
    {
      "lastName": "kelp",
      "firstName": "fred",
      "gender": "male",
      "favoriteColor": "black",
      "birthDate": "12/12/1974"
    },
  ]

  let app; 
  beforeEach(() => {
    app = express();
    app.post('/records', records(appData));
    app.get('/records/birthdate', birthdate(appData));
    app.get('/records/gender', gender(appData));
    app.get('/records/name', name(appData));
  });

  it('birthdate route should return data sorted by date', () => {
    request(app)
      .get('/records/birthdate')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(sortBybirthDate(appData));
        expect(res.body[0].birthDate).toBe('12/12/1974');
      })
      .catch(err => {
        if(err) throw Error(err);
      });
  });

  it('gender route should return data sorted by gender and then last name', () => {
    request(app)
      .get('/records/gender')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(sortbyGender(appData));
        expect(res.body[0].gender).toBe('female');
        expect(res.body[1].lastName).toBe('chen');
      })
      .catch(err => {
        if(err) throw Error(err);
      });
  });

  it('name route should return data sorted by last name in descending order', () => {
    request(app)
      .get('/records/name')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(sortByLastName_desc(appData));
        expect(res.body[0].lastName).toBe('kelp');
      })
      .catch(err => {
        if(err) throw Error(err);
      });
  });

  it('records route should return data with added record', () => {
    request(app)
      .post('/records')
      .send({
        "lastName": "ochoa",
        "firstName": "melissa",
        "gender": "female",
        "favoriteColor": "aqua",
        "birthDate": "6/5/1999"
      })
      .set('Accept', 'application/json')
      .then(res => {
        const updateAppData = appData.push(res.body);
        expect(res.body).toEqual(updateAppData);
        //expect(res.body).toHaveLength(4);
      })
      .catch(err => {
        if(err) throw Error(err);
      });
  });

});
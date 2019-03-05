const { parseData, splitLine, createDataObject } = require('../helpers/parseData');

describe('Parsing data read from a file -- ', () => {
  it('splitline function should split a line with comma, pipe or space and return array', () => {
    const dataWithSpace = 'cane dane male teal 4/23/1982';
    const dataWithPipe = 'cane|dane|male|teal|4/23/1982';
    const dataWithComma = 'cane,dane,male,teal,4/23/1982';

    const splitbySpace = splitLine(dataWithSpace);
    expect(splitbySpace).toHaveLength(5);

    const splitbyPipe = splitLine(dataWithPipe);
    expect(splitbyPipe).toHaveLength(5);

    const splitbyComma = splitLine(dataWithComma);
    expect(splitbyComma).toHaveLength(5);
  });

  it('create an object from split line that only has proper array length', () => {
    const goodarr = ['cane','dane','male','teal','4/23/1982'];
    const badarr = ['cane','dane','male','teal'];

    const goodObj = createDataObject(goodarr);
    expect(typeof goodObj === 'object').toBe(true);
    expect(goodObj.lastName).toEqual('cane');

    const badObj = createDataObject(badarr);
    expect(typeof badObj === 'undefined').toBe(true);
  });

  it('parse data and return array with data', () => {
    const data = 'test data\r\ncane dane male teal 4/23/1982\r\ngrainger daisy female purple 10/21/1998\r\nwolf michael male orange-red 8/22/1985\r\nelf michael';
    const parsedData = parseData(data.trim());

    expect(Array.isArray(parsedData)).toBe(true);
    expect(parsedData).toHaveLength(3);
    expect(parsedData[0].favoriteColor).toEqual('teal');
  })
});
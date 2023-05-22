const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
});


describe('Array Length and Contents Tests', () => {
  it('should return an array of the same length as the input array', () => {
    const inputArray = ['Item 1', 'Item 2', 'Item 3'];
    const resultArray = Bots(inputArray); 

    expect(resultArray.length).toEqual(inputArray.length);
  });

  
  it('should contain all the same items as the input array', () => {
    const inputArray = ['Item 1', 'Item 2', 'Item 3'];
    const resultArray = Bots(inputArray);

    inputArray.forEach(item => {
      expect(resultArray).toContain(item);
    });
  });
});
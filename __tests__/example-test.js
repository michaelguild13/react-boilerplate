// sum.js
function sum (value1, value2) {
  return value1 + value2;
}
//module.exports = sum;

//test.js
//jest.dontMock('../sum');

describe('sum', function () {
  it('adds 1 + 2 to equal 3', function () {
  //var sum = require('../sum');
  expect(sum(1, 2)).toBe(3);
  });
});

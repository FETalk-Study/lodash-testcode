import inRange from '@lodash/inRange';

describe('inRange', () => {
  it('5 is between 1 and 10', () => {
    expect(inRange(5,10,1)).toBeTruthy
  });
  it('If there is no end value, check from 0 to the start value.', () => {
    expect(inRange(5,10)).toBeTruthy
  });
  it('failure case', () => {
    expect(inRange(5,6,7)).toBeFalsy
  });
});

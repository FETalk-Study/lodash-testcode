import sum from '@lodash/sum';

describe('sum', () => {
  it('should return the sum of the values in the array', () => {
    expect(sum([4, 2, 8, 6])).toBe(20);
  });

  it('should return 0 when passed an empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('should return sum of values "in JS way"', () => {
    expect(sum([4, '2', 8, 6])).toBe('4286');
  });
});

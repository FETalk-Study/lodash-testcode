import flatten from '@lodash/flatten';

describe('flatten', () => {
  it('should flatten nested arrays', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  it('should return an empty array when passed an empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should return array with null value', () => {
    expect(flatten([null])).toEqual([null]);
  });
});

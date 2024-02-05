import getAllKeys from '@lodashInternal/getAllKeys';

describe('getAllKeys', () => {
  it('should return an array of all keys', () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(getAllKeys(object)).toEqual(['a', 'b', 'c']);
  });
});

import invert from '@lodash/invert';

describe('invert', () => {
  it('should return an Object of all keys and values ​​are strings and key change to values', () => {
    const object = { a: 1, b: 2, c: 3 };
    expect(invert(object)).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });
});

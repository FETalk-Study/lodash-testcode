import head from '@lodash/head';

describe('head', () => {
  it('should return an Array`s head', () => {
    const array = [1,2,3,4,5];
    expect(head(array)).toEqual(1);
  });

  it('if it is an object, returns undefined', () => {
    const object = {a: 1};
    expect(head(object)).toBeUndefined;
  });
});

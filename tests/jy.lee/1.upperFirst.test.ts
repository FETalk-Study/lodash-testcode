import upperFirst from '@lodash/upperFirst';

describe('upperFirst', () => {
  it('Converts the first character of `string` to upper case.', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('_fred')).toBe('_fred');
  });
});

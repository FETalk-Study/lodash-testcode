import isLength from '@lodash/isLength';

const MAX_SAFE_INTEGER = 9007199254740991;

describe('isLength', () => {
  it('Returns `true` if `value` is a valid length, else `false`', () => {
    expect(isLength(0)).toBe(true);
    expect(isLength('0')).toBe(false);
  });

  it('Check MAX_SAFE_INTEGER', () => {
    expect(isLength(MAX_SAFE_INTEGER)).toBe(true);
    expect(isLength(MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
  });
});

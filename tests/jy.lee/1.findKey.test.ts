import findKey from '@lodash/findKey';

const mockCallbackWithNoKey = jest.fn(({ key }) => key);
const mockCallbackWithKey = jest.fn(({ active }) => !active);

const users = {
  barney: { age: 36, active: true },
  fred: { age: 51, active: false },
  pabbles: { age: 23, active: false },
};

describe('findKey', () => {
  it('find except that it returns the key of the first', () => {
    expect(findKey(users, ({ age }: { age: number }) => age < 40)).toBe('barney');
  });

  it('if the object is null, it returns undefined', () => {
    const dic = {};
    expect(findKey(dic, () => true)).toBeUndefined();
  });

  describe('findkey mock function', () => {
    it('findKey mock function with no key', () => {
      findKey(users, mockCallbackWithNoKey);

      expect(mockCallbackWithNoKey.mock.calls).toHaveLength(3);
      expect(mockCallbackWithNoKey.mock.results[0].value).toBeUndefined();
    });

    it('findkey mock function with key', () => {
      findKey(users, mockCallbackWithKey);

      expect(mockCallbackWithKey.mock.calls).toHaveLength(2);
      expect(mockCallbackWithKey.mock.calls[1][0]).toEqual(users.fred);
    });
  });
});

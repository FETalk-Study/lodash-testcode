import subtract from '@lodash/subtract';

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(6, 4)).toBe(2);
    // handle floating point numbers
    expect(subtract(6.2, 4.3)).toBe(6.2 - 4.3);
  });

  it('should subtract in JS way', () => {
    expect(subtract(6, '4')).toBe(2);
    expect(subtract('6', 4)).toBe(2);
    expect(subtract('6', '4')).toBe(2);
    expect(subtract(6, '04')).toBe(2);
    expect(subtract('06', 4)).toBe(2);
    expect(subtract('06', '04')).toBe(2);
    expect(subtract(6, '4.0')).toBe(2);
    expect(subtract('6.0', 4)).toBe(2);
    expect(subtract('6.0', '4.0')).toBe(2);
  });

  it('should return NaN when passed a non-numeric value', () => {
    expect(subtract(6, 'a')).toBeNaN();
    expect(subtract('a', 4)).toBeNaN();
    expect(subtract('a', 'b')).toBeNaN();
  });
});

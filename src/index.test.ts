import { divideArray } from './index';

describe('divideArray(arr, n)', () => {
  test('should return an array of N equally sized arrays', () => {
    const arr = [1, 2, 3];
    const n = 3;
    const expected = [[1], [2], [3]];
    expect(divideArray(arr, n)).toEqual(expected);
  });

  describe('if the size of the original array cannot be divided equally by N', () => {
    test('the final part should have a length equal to the remainder.', () => {
      const arr = [1, 2, 3, 4, 5];
      const n = 3;
      const expected = [[1, 2], [3, 4], [5]];
      expect(divideArray(arr, n)).toEqual(expected);
    });
  });

  describe('if N is not a positive integer', () => {
    test('should throw an Error', () => {
      const arr = [1, 2, 3, 4, 5];
      const n = 0;
      const expected = new Error('The divider must be positive.');
      expect(() => {
        divideArray(arr, n);
      }).toThrow(expected);
    });
  });
  describe('if N is bigger than the length of the array', () => {
    test('should throw an Error', () => {
      const arr = [1, 2, 3, 4, 5];
      const n = 7;
      const expected = new Error('titi');
      expect(() => {
        divideArray(arr, n);
      }).toThrow(expected);
    });
  });
});

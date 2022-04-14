import { functionImportTest } from '@utils';

import { arrayOfObjectsToArrayOfNumbers } from './array-of-objects-to-array-of-numbers.function';

describe('arrayOfObjectsToArrayOfNumbers function', () => {
  functionImportTest(arrayOfObjectsToArrayOfNumbers);

  it('should return empty array when passed one is not an array', () => {
    // @ts-expect-error
    expect(arrayOfObjectsToArrayOfNumbers(null, 'key')).toEqual([]);
    // @ts-expect-error
    expect(arrayOfObjectsToArrayOfNumbers(new Date(), 'key')).toEqual([]);
  });

  it('should return empty array when passed one is empty', () => {
    expect(arrayOfObjectsToArrayOfNumbers([], 'key')).toEqual([]);
  });

  it('should return empty array when passed key is not a string value', () => {
    // @ts-expect-error
    expect(arrayOfObjectsToArrayOfNumbers([], 12)).toEqual([]);
  });

  it('should return empty array when passed key is empty string', () => {
    expect(arrayOfObjectsToArrayOfNumbers([], '')).toEqual([]);
  });

  it('should convert array of objects to array of numbers', () => {
    expect(arrayOfObjectsToArrayOfNumbers([{ key: '1' }, { key: '2' }], 'key')).toEqual([1, 2]);
    expect(
      arrayOfObjectsToArrayOfNumbers(
        [{ nested: { key: 1 } }, { nested: { key: 2 } }],
        'nested.key',
      ),
    ).toEqual([1, 2]);
  });
});

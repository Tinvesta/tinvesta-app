import { functionImportTest } from '@utils';

import { compareObjectsByValue } from './compare-objects-by-value.function';

describe('compareObjectsByValue function', () => {
  functionImportTest(compareObjectsByValue);

  describe('return 0 case', () => {
    it('should return when both values are falsy', () => {
      expect(compareObjectsByValue('test')(null, undefined)).toBe(0);
    });

    it('should return when both values are the same', () => {
      expect(compareObjectsByValue('test')({ test: 'test' }, { test: 'test' })).toBe(0);
    });
  });

  it('should return -1 when valueA is smaller than valueB', () => {
    expect(compareObjectsByValue('test')({ test: 'a' }, { test: 'b' })).toBe(-1);
  });

  it('should return 1 when valueA is bigger than valueB', () => {
    expect(compareObjectsByValue('test')({ test: 'b' }, { test: 'a' })).toBe(1);
  });

  it('should sort array data', () => {
    const array = [{ test: 'b' }, { test: 'a' }, { test: 'c' }];

    const sortedArray = [{ test: 'a' }, { test: 'b' }, { test: 'c' }];

    expect(array.sort(compareObjectsByValue('test'))).toEqual(sortedArray);
  });
});

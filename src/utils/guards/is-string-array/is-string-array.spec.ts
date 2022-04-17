import { functionImportTest } from '@utils';

import { isStringArray } from './is-string-array.function';

describe('isStringArray function', () => {
  functionImportTest(isStringArray);

  it('should return false when passed value is not an array of strings', () => {
    expect(isStringArray(undefined)).toBeFalsy();
    expect(isStringArray(null)).toBeFalsy();
    expect(isStringArray(true)).toBeFalsy();
    expect(isStringArray(false)).toBeFalsy();
    expect(isStringArray(0)).toBeFalsy();
    expect(isStringArray(1)).toBeFalsy();
    expect(isStringArray('')).toBeFalsy();
    expect(isStringArray('string')).toBeFalsy();
    expect(isStringArray({})).toBeFalsy();
    expect(isStringArray({ length: 0 })).toBeFalsy();
    expect(isStringArray([1])).toBeFalsy();
    expect(isStringArray([1, 2, 3])).toBeFalsy();
  });

  it('should return false when at least one array element is not a string value', () => {
    expect(isStringArray(['1', 2, '3'])).toBeFalsy();
  });

  it('should return true for empty array', () => {
    expect(isStringArray([])).toBeTruthy();
  });

  it('should return true when array is full of strings', () => {
    expect(isStringArray(['1', '2', '3'])).toBeTruthy();
  });
});

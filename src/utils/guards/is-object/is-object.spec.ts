import { functionImportTest, isObject } from '@utils';

describe('isObject Function', () => {
  functionImportTest(isObject);

  it('should return false when provided parameter is not an object', () => {
    // @ts-expect-error
    expect(isObject()).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
    expect(isObject('')).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject('123')).toBeFalsy();
    expect(isObject(() => {})).toBeFalsy();
    expect(isObject(Number.NaN)).toBeFalsy();
    expect(isObject(Number.NEGATIVE_INFINITY)).toBeFalsy();
    expect(isObject(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('should return true when provided parameter is an object', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject({ x: 1 })).toBeTruthy();
  });
});

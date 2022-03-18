import { functionImportTest, isArray } from '@utils';

describe('isArray function', () => {
  functionImportTest(isArray);

  it('should return false when provided parameter is not an array', () => {
    // @ts-expect-error
    expect(isArray()).toBeFalsy();
    expect(isArray({})).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray('A123')).toBeFalsy();
    expect(isArray(() => {})).toBeFalsy();
    expect(isArray(jest.fn())).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
  });

  it('should return true when provided parameter is an array', () => {
    expect(isArray([])).toBeTruthy();
  });
});

import { functionImportTest, isNumber } from '@utils';

describe('isNumber Function', () => {
  functionImportTest(isNumber);

  it('should return false when provided parameter is not a number value', () => {
    expect(isNumber({})).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber('A123')).toBeFalsy();
    // @ts-expect-error
    expect(isNumber()).toBeFalsy();
    expect(isNumber([1, 2, 3])).toBeFalsy();
    expect(isNumber(new Date())).toBeFalsy();
  });

  it('should return true when provided parameter is a number value', () => {
    expect(isNumber(500)).toBeTruthy();
    expect(isNumber(-500)).toBeTruthy();
    expect(isNumber('1234')).toBeTruthy();
    expect(isNumber('   1234   ')).toBeTruthy();
  });
});

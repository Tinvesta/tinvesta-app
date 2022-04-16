import { functionImportTest } from '@utils';

import { toCamelCase } from './to-camel-case.function';

describe('toCamelCase function', () => {
  functionImportTest(toCamelCase);

  it('should return passed value when it is not a string', () => {
    const value = {};
    // @ts-expect-error
    const result = toCamelCase(value);

    expect(result).toBe(value);
  });

  it('should parse passed string to camel case', () => {
    expect(toCamelCase('_my_string_')).toBe('myString');
    expect(toCamelCase('my_string_')).toBe('myString');
    expect(toCamelCase('----my_string----')).toBe('myString');
    expect(toCamelCase('my super    string')).toBe('mySuperString');
  });
});

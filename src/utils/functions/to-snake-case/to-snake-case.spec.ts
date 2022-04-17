import { functionImportTest } from '@utils';

import { toSnakeCase } from './to-snake-case.function';

describe('toSnakeCase function', () => {
  functionImportTest(toSnakeCase);

  it('should return passed value when it is not a string', () => {
    const value = {};
    // @ts-expect-error
    const result = toSnakeCase(value);

    expect(result).toBe(value);
  });

  it('should parse passed string to snake case', () => {
    expect(toSnakeCase('_my_string_')).toBe('my_string');
    expect(toSnakeCase('my_string_')).toBe('my_string');
    expect(toSnakeCase('----my_string----')).toBe('my_string');
    expect(toSnakeCase('my super    string')).toBe('my_super_string');
  });
});

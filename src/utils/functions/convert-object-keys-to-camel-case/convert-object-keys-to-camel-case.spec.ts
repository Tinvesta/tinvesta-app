import { functionImportTest } from '@utils';

import { convertObjectKeysToCamelCase } from './convert-object-keys-to-camel-case.function';

describe('convertObjectKeysToCamelCase function', () => {
  functionImportTest(convertObjectKeysToCamelCase);

  it('should return passed value when that one is not an object or is an empty object', () => {
    expect(convertObjectKeysToCamelCase(null)).toBeNull();
    expect(convertObjectKeysToCamelCase({})).toStrictEqual({});
  });

  it('should convert all object keys to camel case', () => {
    expect(
      convertObjectKeysToCamelCase({
        first_level: {
          second_level: {
            third_level: 'value',
          },
          'experiment-level': 123,
        },
        first_level_2: 'pogu',
      }),
    ).toStrictEqual({
      firstLevel: {
        secondLevel: {
          thirdLevel: 'value',
        },
        experimentLevel: 123,
      },
      firstLevel2: 'pogu',
    });
  });
});

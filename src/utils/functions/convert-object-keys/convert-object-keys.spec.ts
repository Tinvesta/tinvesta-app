import { functionImportTest } from '@utils';

import { convertObjectKeysToCamelCase } from './convert-object-keys.function';

describe('convertObjectKeys function', () => {
  functionImportTest(convertObjectKeysToCamelCase);

  it('should return passed value when that one is not an object or is an empty object', () => {
    expect(convertObjectKeysToCamelCase(null)).toBeNull();
    expect(convertObjectKeysToCamelCase({})).toStrictEqual({});
  });

  it('should convert all object keys to camel case', () => {
    const snakeCaseMock = {
      first_level: {
        second_level: {
          third_level: 'value',
        },
        experiment_level: 123,
      },
      first_level_2: 'pogu',
    };

    const camelCaseMock = {
      firstLevel: {
        secondLevel: {
          thirdLevel: 'value',
        },
        experimentLevel: 123,
      },
      firstLevel2: 'pogu',
    };

    expect(convertObjectKeysToCamelCase(snakeCaseMock)).toStrictEqual(camelCaseMock);
  });
});

import { functionImportTest } from '@utils';

import { getObjectProperty } from './get-object-property.function';

describe('getObjectProperty function', () => {
  functionImportTest(getObjectProperty);

  it('should return null when passed object is not an object', () => {
    // @ts-expect-error
    expect(getObjectProperty(null, 'key')).toBeNull();
    // @ts-expect-error
    expect(getObjectProperty(new Date(), 'key')).toBeNull();
  });

  it('should return null when passed property is not a string or is an empty string', () => {
    expect(getObjectProperty({ key: 1 }, '')).toBeNull();
    // @ts-expect-error
    expect(getObjectProperty({ key: 1 }, null)).toBeNull();
  });

  it('should return null when passed property does not exists in the object', () => {
    expect(getObjectProperty({ key1: 1 }, 'key')).toBeNull();
    expect(getObjectProperty({ key: { key: 2 } }, 'key.key1')).toBeNull();
    expect(getObjectProperty({ key: { key: 2 } }, 'key1.key')).toBeNull();
  });

  it('should return key from the object', () => {
    expect(getObjectProperty({ key: 1 }, 'key')).toStrictEqual(1);
    expect(getObjectProperty({ key: { nestedOne: 'nested key' } }, 'key.nestedOne')).toStrictEqual(
      'nested key',
    );
  });
});

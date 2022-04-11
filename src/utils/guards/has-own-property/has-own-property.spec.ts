import { functionImportTest } from '@utils';

import { hasOwnProperty } from './has-own-property.function';

describe('hasOwnProperty function', () => {
  functionImportTest(hasOwnProperty);

  it('should return false when passed value is not an object', () => {
    // @ts-expect-error
    expect(hasOwnProperty()).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(1)).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty([])).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty('')).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(null)).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(true)).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty('123')).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(() => {})).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(Number.NaN)).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(Number.NEGATIVE_INFINITY)).toBeFalsy();
    // @ts-expect-error
    expect(hasOwnProperty(Number.POSITIVE_INFINITY)).toBeFalsy();
  });

  it('should return false when passed object does not contain property', () => {
    expect(hasOwnProperty({}, 'name')).toBeFalsy();
  });

  it('should return true when passed object contain property', () => {
    expect(hasOwnProperty({ name: 'name' }, 'name')).toBeTruthy();
  });
});

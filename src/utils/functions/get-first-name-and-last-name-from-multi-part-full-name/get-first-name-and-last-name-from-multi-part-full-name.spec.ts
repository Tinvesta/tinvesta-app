import { functionImportTest } from '@utils';

import { getFirstNameAndLastNameFromMultiPartFullName } from './get-first-name-and-last-name-from-multi-part-full-name.function';

describe('getFirstNameAndLastNameFromMultiPartFullName function', () => {
  functionImportTest(getFirstNameAndLastNameFromMultiPartFullName);

  it('should return firstName and lastName as empty strings when passed value is not a string', () => {
    // @ts-expect-error
    expect(getFirstNameAndLastNameFromMultiPartFullName(null)).toEqual({
      firstName: '',
      lastName: '',
    });
    // @ts-expect-error
    expect(getFirstNameAndLastNameFromMultiPartFullName(1)).toEqual({
      firstName: '',
      lastName: '',
    });
  });

  it('should return firstName and lastName as empty strings when passed value cannot be splitted into words', () => {
    expect(getFirstNameAndLastNameFromMultiPartFullName('')).toEqual({
      firstName: '',
      lastName: '',
    });
    expect(getFirstNameAndLastNameFromMultiPartFullName(' ')).toEqual({
      firstName: '',
      lastName: '',
    });
    expect(getFirstNameAndLastNameFromMultiPartFullName('    ')).toEqual({
      firstName: '',
      lastName: '',
    });
  });

  it('should return filled firstName and empty lastName', () => {
    expect(getFirstNameAndLastNameFromMultiPartFullName('Name')).toEqual({
      firstName: 'Name',
      lastName: '',
    });
    expect(getFirstNameAndLastNameFromMultiPartFullName('Bob')).toEqual({
      firstName: 'Bob',
      lastName: '',
    });
  });

  it('should return filled firstName and lastName', () => {
    expect(getFirstNameAndLastNameFromMultiPartFullName('Paweł Wojtasiński')).toEqual({
      firstName: 'Paweł',
      lastName: 'Wojtasiński',
    });
    expect(getFirstNameAndLastNameFromMultiPartFullName('Wielo członowe imię i nazwisko')).toEqual({
      firstName: 'Wielo',
      lastName: 'nazwisko',
    });
  });
});

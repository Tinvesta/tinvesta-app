import { functionImportTest } from '@utils';

import { profileFirstNameAndLastNameToFullName } from './profile-first-name-and-last-name-to-full-name.function';

describe('profileFirstNameAndLastNameToFullName function', () => {
  functionImportTest(profileFirstNameAndLastNameToFullName);

  it('should return empty string when passed value does not exist', () => {
    // @ts-expect-error
    expect(profileFirstNameAndLastNameToFullName(null)).toBe('');
  });

  it('should return empty string when passed object does not contain firstName property', () => {
    // @ts-expect-error
    expect(profileFirstNameAndLastNameToFullName({ avatars: [] })).toBe('');
  });

  it('should return firstName when lastName does not exist', () => {
    // @ts-expect-error
    expect(profileFirstNameAndLastNameToFullName({ firstName: 'TEST' })).toBe('TEST');
  });

  it('should combine firstName and lastName into one thing', () => {
    expect(
      profileFirstNameAndLastNameToFullName({ firstName: 'FIRST_NAME', lastName: 'LAST_NAME' }),
    ).toBe('FIRST_NAME LAST_NAME');
  });
});

import { functionImportTest } from '@utils';

import { parseProfileAvatarUrl } from './parse-profile-avatar-url.function';

describe('parseProfileAvatarUrl function', () => {
  functionImportTest(parseProfileAvatarUrl);

  it('should return false when provided parameter is not a string value', () => {
    // @ts-expect-error
    expect(parseProfileAvatarUrl()).toEqual('');
    // @ts-expect-error
    expect(parseProfileAvatarUrl({})).toEqual('');
    // @ts-expect-error
    expect(parseProfileAvatarUrl(null)).toEqual('');
    // @ts-expect-error
    expect(parseProfileAvatarUrl(-500)).toEqual('');
    // @ts-expect-error
    expect(parseProfileAvatarUrl([1, 2, 3])).toEqual('');
    // @ts-expect-error
    expect(parseProfileAvatarUrl(new Date())).toEqual('');
  });

  it('should parse profile avatar url', () => {
    expect(
      parseProfileAvatarUrl(
        '"https://lh3.googleusercontent.com/a-/AOh14GjUErG7Z0UwRg7WLxVjtsK2acMF8OFuagGtE9Qwwg=s96-c"',
      ),
    ).toEqual(
      'https://lh3.googleusercontent.com/a-/AOh14GjUErG7Z0UwRg7WLxVjtsK2acMF8OFuagGtE9Qwwg=s96-c',
    );
  });
});

import { functionImportTest } from '@utils';

import { getFileExtensionFromBase64 } from './get-file-extension-from-base64.function';

const stringWithMime =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQAQMAAAD1s08VAAAAA1BMVEX/AAAZ4gk3AAAAh0lEQVR42u3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GsTfAAGc95RKAAAAAElFTkSuQmCC';

describe('getFileExtensionFromBase64 function', () => {
  functionImportTest(getFileExtensionFromBase64);

  it('should return null when passed value is not a string', () => {
    // @ts-expect-error
    expect(getFileExtensionFromBase64()).toBeNull();
    // @ts-expect-error
    expect(getFileExtensionFromBase64({})).toBeNull();
    // @ts-expect-error
    expect(getFileExtensionFromBase64(null)).toBeNull();
    // @ts-expect-error
    expect(getFileExtensionFromBase64(-500)).toBeNull();
    // @ts-expect-error
    expect(getFileExtensionFromBase64([1, 2, 3])).toBeNull();
    // @ts-expect-error
    expect(getFileExtensionFromBase64(new Date())).toBeNull();
  });

  it('should return null when passed value cannot be splitted', () => {
    expect(getFileExtensionFromBase64('123')).toBeNull();
    expect(getFileExtensionFromBase64('123;123')).toBeNull();
  });

  it('should return file extension from base64', () => {
    expect(getFileExtensionFromBase64(stringWithMime)).toStrictEqual('png');
  });
});

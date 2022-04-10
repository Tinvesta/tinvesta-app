import { functionImportTest } from '@utils';

import { isBase64 } from './is-base64.function';

describe('isBase64 function', () => {
  functionImportTest(isBase64);

  it('should return false when provided parameter is not a string value', () => {
    // @ts-expect-error
    expect(isBase64()).toBeFalsy();
    // @ts-expect-error
    expect(isBase64({})).toBeFalsy();
    // @ts-expect-error
    expect(isBase64(null)).toBeFalsy();
    // @ts-expect-error
    expect(isBase64(-500)).toBeFalsy();
    // @ts-expect-error
    expect(isBase64([1, 2, 3])).toBeFalsy();
    // @ts-expect-error
    expect(isBase64(new Date())).toBeFalsy();
  });

  it('should return false when provided parameter is not a valid base64 string', () => {
    expect(isBase64('123')).toBeFalsy();
  });

  it('should return true when provided parameter is a valid base64 string', () => {
    expect(
      isBase64(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEAk4gAAgkQcAECQiAMACBJxAABB/z/wILeriOVNAAAAAElFTkSuQmCC',
      ),
    ).toBeTruthy();
  });
});

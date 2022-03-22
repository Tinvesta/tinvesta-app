import { functionImportTest, getWindowSize } from '@utils';

describe('getWindowSize function', () => {
  functionImportTest(getWindowSize);

  it('should return window width and height', () => {
    const result = getWindowSize();

    expect(result.height).toEqual(768);
    expect(result.width).toEqual(1024);
  });
});

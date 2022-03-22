import { functionImportTest, getWindowWidth } from '@utils';

describe('getWindowWidth function', () => {
  functionImportTest(getWindowWidth);

  it('should return window width', () => {
    expect(getWindowWidth()).toEqual(1024);
  });
});

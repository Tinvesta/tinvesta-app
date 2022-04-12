import { functionImportTest } from '@utils';

import { countWords } from './count-words.function';

describe('countWords function', () => {
  functionImportTest(countWords);

  it('should return 0 when provided parameter is not a string value', () => {
    // @ts-expect-error
    expect(countWords()).toStrictEqual(0);
    // @ts-expect-error
    expect(countWords({})).toStrictEqual(0);
    // @ts-expect-error
    expect(countWords(null)).toStrictEqual(0);
    // @ts-expect-error
    expect(countWords(-500)).toStrictEqual(0);
    // @ts-expect-error
    expect(countWords([1, 2, 3])).toStrictEqual(0);
    // @ts-expect-error
    expect(countWords(new Date())).toStrictEqual(0);
  });

  it('should return number of words', () => {
    expect(countWords('1 2 3 4 5')).toStrictEqual(4);
    expect(countWords('1 2 3 4 5', '3')).toStrictEqual(1);
    expect(countWords('1 2 3 4 5', '12312')).toStrictEqual(0);
  });
});

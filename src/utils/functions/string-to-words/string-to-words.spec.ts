import { functionImportTest } from '@utils';

import { stringToWords } from './string-to-words.function';

describe('stringToWords function', () => {
  functionImportTest(stringToWords);

  it('should return empty array when passed string is not a string value', () => {
    // @ts-expect-error
    expect(stringToWords(213)).toStrictEqual([]);
  });

  it('should return array of words', () => {
    expect(stringToWords('my super very long string')).toStrictEqual([
      'my',
      'super',
      'very',
      'long',
      'string',
    ]);
    expect(stringToWords('-my-super,very^long;string')).toStrictEqual([
      'my',
      'super',
      'very',
      'long',
      'string',
    ]);
  });
});

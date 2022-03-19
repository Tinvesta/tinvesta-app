import { camelCase, functionImportTest } from '@utils';

describe('camelCase function', () => {
  functionImportTest(camelCase);

  it('should return empty string when passed value is not a string value', () => {
    // @ts-expect-error
    expect(camelCase(5)).toEqual('');
    // @ts-expect-error
    expect(camelCase([])).toEqual('');
    // @ts-expect-error
    expect(camelCase(null)).toEqual('');
  });

  it('should return string value in the camelCase format', () => {
    expect(camelCase('test.phrase.one')).toEqual('testPhraseOne');
    expect(camelCase('test_phrase_two')).toEqual('testPhraseTwo');
    expect(camelCase('test-phrase-three')).toEqual('testPhraseThree');
  });
});

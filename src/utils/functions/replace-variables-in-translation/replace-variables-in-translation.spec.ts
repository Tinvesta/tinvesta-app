import { functionImportTest } from '@utils';

import { replaceVariablesInTranslation } from './replace-variables-in-translation.function';

describe('replaceVariablesInTranslation function', () => {
  functionImportTest(replaceVariablesInTranslation);

  it('should return empty string when passes translation is not a string value', () => {
    // @ts-expect-error
    expect(replaceVariablesInTranslation(123)).toStrictEqual('');

    // @ts-expect-error
    expect(replaceVariablesInTranslation(null)).toStrictEqual('');

    // @ts-expect-error
    expect(replaceVariablesInTranslation([])).toStrictEqual('');

    // @ts-expect-error
    expect(replaceVariablesInTranslation(new Date())).toStrictEqual('');
  });

  it('should return translation string when values was not passed', () => {
    expect(replaceVariablesInTranslation('My translation string')).toStrictEqual(
      'My translation string',
    );
  });

  it('should return translation with replaced values', () => {
    expect(replaceVariablesInTranslation('My {{0}} example', 'super')).toStrictEqual(
      'My super example',
    );
  });

  it('should not replace values when there is nothig to replace', () => {
    expect(replaceVariablesInTranslation('My {{0}} example {{1}}', 'super')).toStrictEqual(
      'My super example {{1}}',
    );

    expect(replaceVariablesInTranslation('My {{0}} example {{1}}', 'super', 'xD')).toStrictEqual(
      'My super example xD',
    );
  });
});

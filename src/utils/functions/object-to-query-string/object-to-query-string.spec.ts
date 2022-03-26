import { functionImportTest } from '@utils';

import { objectToQueryString } from './object-to-query-string.function';

const TEST_OBJECT = {
  parameter1: 1,
  parameter2: 'test',
  parameter3: null,
  parameter4: undefined,
  parameter5: [],
  parameter6: [1, 2, 3],
};

describe('objectToQueryString function', () => {
  functionImportTest(objectToQueryString);

  it('should return empty string', () => {
    // @ts-expect-error
    expect(objectToQueryString()).toEqual('');
    expect(objectToQueryString({})).toEqual('');
  });

  it('should return well-formatted query string', () => {
    expect(objectToQueryString(TEST_OBJECT)).toEqual(
      '?parameter1=1&parameter2=test&parameter3&parameter6=1&parameter6=2&parameter6=3',
    );
  });

  it('should not add question mark at the begining', () => {
    expect(objectToQueryString(TEST_OBJECT, { withQuestionMarkPrefix: false })).toEqual(
      'parameter1=1&parameter2=test&parameter3&parameter6=1&parameter6=2&parameter6=3',
    );
  });
});

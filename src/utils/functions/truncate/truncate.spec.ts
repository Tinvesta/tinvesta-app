import { functionImportTest } from '@utils';

import { truncate } from './truncate.function';

describe('truncate function', () => {
  functionImportTest(truncate);

  it('should return empty string when provided parameter is not a string value', () => {
    // @ts-expect-error
    expect(truncate()).toEqual('');
    // @ts-expect-error
    expect(truncate({})).toEqual('');
    // @ts-expect-error
    expect(truncate(null)).toEqual('');
    // @ts-expect-error
    expect(truncate(-500)).toEqual('');
    // @ts-expect-error
    expect(truncate([1, 2, 3])).toEqual('');
    // @ts-expect-error
    expect(truncate(new Date())).toEqual('');
  });

  it('should return passed string value when truncate postion is out of string`s length', () => {
    expect(truncate('TEST', 10)).toEqual('TEST');
  });

  it('should return three dots when truncateAt parameter is negative of equal to zero', () => {
    expect(truncate('TEST', 0)).toEqual('...');
    expect(truncate('TEST', -10)).toEqual('...');
  });

  it('should truncate passed string', () => {
    expect(truncate('TEST', 2)).toEqual('TE...');
  });

  it('should truncate passed string with custom string', () => {
    expect(truncate('TEST', 2, '[...]')).toEqual('TE[...]');
  });
});

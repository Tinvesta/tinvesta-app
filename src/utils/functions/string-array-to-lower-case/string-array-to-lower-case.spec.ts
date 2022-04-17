import { functionImportTest } from '@utils';

import { stringArrayToLowerCase } from './string-array-to-lower-case.function';

describe('stringArrayToLowerCase function', () => {
  functionImportTest(stringArrayToLowerCase);

  it('should parse string of arrays to lowercase', () => {
    expect(stringArrayToLowerCase(['HUIiauhddkaADSHUIDuihasdhiu', 'ZdanieXD', 'teSt'])).toEqual([
      'huiiauhddkaadshuiduihasdhiu',
      'zdaniexd',
      'test',
    ]);
  });
});

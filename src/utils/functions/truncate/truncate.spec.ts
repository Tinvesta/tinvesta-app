import { functionImportTest } from '@utils';

import { truncate } from './truncate.function';

describe('truncate function', () => {
  functionImportTest(truncate);
});

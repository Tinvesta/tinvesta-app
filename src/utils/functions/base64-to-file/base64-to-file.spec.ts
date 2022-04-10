import { functionImportTest } from '@utils';

import { base64ToFile } from './base64-to-file.function';

describe('base64ToFile function', () => {
  functionImportTest(base64ToFile);
});

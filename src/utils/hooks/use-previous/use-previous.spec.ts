import { functionImportTest } from '@utils';

import { usePrevious } from './use-previous.hook';

describe('usePrevious hook', () => {
  functionImportTest(usePrevious);
});

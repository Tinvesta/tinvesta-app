import { functionImportTest } from '@utils';

import { verifyUserAccess } from './verify-user-access.function';

describe('verifyUserAccess function', () => {
  functionImportTest(verifyUserAccess);
});

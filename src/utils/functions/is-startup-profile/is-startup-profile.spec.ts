import { functionImportTest } from '@utils';

import { isStartupProfile } from './is-startup-profile.function';

describe('isStartupProfile function', () => {
  functionImportTest(isStartupProfile);
});

import { functionImportTest } from '@utils';

import { getAvailableLanguages } from './get-available-languages.function';

describe('getAvailableLanguages function', () => {
  functionImportTest(getAvailableLanguages);
});

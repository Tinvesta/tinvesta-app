import { functionImportTest } from '@utils';

import { createEmotionCache } from './create-emotion-cache.function';

describe('createEmotionCache function', () => {
  functionImportTest(createEmotionCache);
});

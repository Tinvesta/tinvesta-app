import { functionImportTest, toMatchSnapshot } from '@utils';

import { respondToMax, respondToMin } from './respond-to.mixin';

describe('respondToMin mixin', () => {
  functionImportTest(respondToMin.xl);
  toMatchSnapshot(() => respondToMin.xl`background-color: red;`);
});

describe('respondToMax mixin', () => {
  functionImportTest(respondToMax.xl);
  toMatchSnapshot(() => respondToMax.xl`background-color: red;`);
});

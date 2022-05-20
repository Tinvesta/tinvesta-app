import { functionImportTest } from '@utils';

import { sendEmail } from './send-email.function';

describe('sendEmail function', () => {
  functionImportTest(sendEmail);
});

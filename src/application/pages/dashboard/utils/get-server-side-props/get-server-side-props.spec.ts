import { functionImportTest } from '@utils';

import { getServerSideProps } from './get-server-side-props.function';

describe('getServerSideProps function', () => {
  functionImportTest(getServerSideProps);
});

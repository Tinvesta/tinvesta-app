import Head from 'next/head';

import { Home } from '@domain';

import { CenterBlockLayout } from '@ui';

export const HomePage = (): JSX.Element => (
  <CenterBlockLayout>
    <Head>
      <title>Tinvesta</title>
    </Head>
    <Home />
  </CenterBlockLayout>
);

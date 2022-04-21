import Head from 'next/head';

import { Home } from '@domain';

import { CenterBlockLayout } from '@ui';

export const HomePage = (): JSX.Element => (
  <CenterBlockLayout>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <Home />
  </CenterBlockLayout>
);

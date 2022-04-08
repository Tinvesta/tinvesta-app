import Head from 'next/head';

import { Home } from '@domain';

import { CenterBlockLayout, ParticlesBackground } from '@ui';

export const HomePage = (): JSX.Element => (
  <CenterBlockLayout>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <ParticlesBackground />
    <Home />
  </CenterBlockLayout>
);

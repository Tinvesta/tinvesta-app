import { Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { ParticlesBackground } from '@ui';

import S from './release-date.styles';

export const ReleaseDatePage = (): JSX.Element => (
  <S.StyledWrapper>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <ParticlesBackground />
    <Image priority alt="Tinvesta" height={200} src="/images/animated-full-logo.svg" width={200} />
    <Typography variant="h3">28.05.2022</Typography>
  </S.StyledWrapper>
);

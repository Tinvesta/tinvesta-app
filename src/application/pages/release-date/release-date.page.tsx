import { Typography } from '@mui/material';
import Head from 'next/head';

import { ParticlesBackground } from '../home/atoms';
import S from './release-date.styles';

export const ReleaseDate = (): JSX.Element => (
  <S.StyledWrapper>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <ParticlesBackground />
    <Typography variant="h3">26.05.2022</Typography>
  </S.StyledWrapper>
);

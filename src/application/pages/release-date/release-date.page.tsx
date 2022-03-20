import { Typography } from '@mui/material';
import Head from 'next/head';

import S from './release-date.styles';

export const ReleaseDate = (): JSX.Element => (
  <S.StyledWrapper>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
      <link href="/favicon.ico" rel="icon" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
    </Head>
    <Typography variant="h2">26.05.2022</Typography>
  </S.StyledWrapper>
);

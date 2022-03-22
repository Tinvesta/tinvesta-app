import { Typography } from '@mui/material';
import Head from 'next/head';

import S from './release-date.styles';

export const ReleaseDate = (): JSX.Element => (
  <S.StyledWrapper>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <Typography variant="h2">26.05.2022</Typography>
  </S.StyledWrapper>
);

import { Button, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { CenterBlockLayout } from '@ui';

import S from './home.styles';

export const Home = (): JSX.Element => (
  <CenterBlockLayout>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
    </Head>
    <Image alt="Tinvesta" height={200} src="/images/animated-full-logo.svg" width={200} />
    {process.env.NEXT_PUBLIC_ENABLE_HOME_PAGE === 'true' && (
      <>
        <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="h1">
          SWIPE &amp; MATCH
        </Typography>
        <S.StyledSubHeaderWrapper>
          <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="body1">
            matchmaking app for start-ups and investors all over the world
          </Typography>
          <Button size="large" variant="outlined">
            Create an account
          </Button>
        </S.StyledSubHeaderWrapper>
      </>
    )}
  </CenterBlockLayout>
);

import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const StyledBackgroundWrapper = styled.main`
  background: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const StyledHeading = styled.h1`
  font-size: 64px;
  color: #e9e9e9;
  font-weight: 600;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Tinvesta</title>
      <meta content="Tinvesta app" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <StyledBackgroundWrapper>
      <StyledHeading>SOON...</StyledHeading>
    </StyledBackgroundWrapper>
  </div>
);

export default Home;

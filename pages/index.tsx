import type { NextPage } from 'next'
import styled from '@emotion/styled';
import Head from 'next/head'
import Image from 'next/image'

const StyledBackgroundWrapper = styled.main`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const StyledHeading = styled.h1`
  font-size: 48px;
  color: #000;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tinvesta</title>
        <meta name="description" content="Tinvesta app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <StyledBackgroundWrapper>
        <StyledHeading>
          SOON...
        </StyledHeading>
      </StyledBackgroundWrapper>
    </div>
  )
}

export default Home

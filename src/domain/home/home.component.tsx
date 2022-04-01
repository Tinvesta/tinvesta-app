import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useModal } from '@ui';

import { useUser } from '@utils';

import { SignInModalContent } from './atoms';
import S from './home.styles';

export const Home = (): JSX.Element => {
  const { user } = useUser();
  const router = useRouter();
  const { Modal, show } = useModal();

  const isSignedIn = !!user;

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    // TODO - decide where user should be redirected based on user data
    router.push('/registration');
  };

  return (
    <>
      <Modal>
        <SignInModalContent />
      </Modal>
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
            <Button size="large" variant="outlined" onClick={onSignInButtonClick}>
              {!isSignedIn ? 'Create an account' : 'Sign In'}
            </Button>
          </S.StyledSubHeaderWrapper>
        </>
      )}
    </>
  );
};

import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useModal } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import { SignInModalContent } from './atoms';
import S from './home.styles';

export const Home = (): JSX.Element => {
  const { isLoading, user } = useUser();
  const router = useRouter();
  const { Modal, show } = useModal();

  const isSignedIn = !!user && !isLoading;

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    router.push(user.client_type_id ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  return (
    <>
      <Modal>
        <SignInModalContent />
      </Modal>
      <Image
        priority
        alt="Tinvesta"
        height={200}
        src="/images/animated-full-logo.svg"
        width={200}
      />
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        src="/images/desktop-polygon-scatter-haikei.svg"
      />
      <Image priority alt="Tinvesta" layout="fill" src="/images/desktop-blob-scatter-haikei.svg" />
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

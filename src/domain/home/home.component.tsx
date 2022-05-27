import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useModal } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import { SignInModalContent } from './atoms';
import S from './home.styles';

export const Home = (): JSX.Element => {
  const router = useRouter();
  const { Modal, show } = useModal();
  const { isLoading, user } = useUser();

  const isSignedIn = !!user && !isLoading;

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    router.push(user.client_type_id ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  return (
    <S.StyledWrapper>
      <Modal>
        <SignInModalContent />
      </Modal>
      <Image
        priority
        alt="Tinvesta"
        layout="fill"
        objectFit="cover"
        src="/images/background/desktop-homepage.svg"
      />
      <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="h1">
        SWIPE &amp; MATCH
      </Typography>
      <S.StyledSubHeaderWrapper>
        <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="h6">
          matchmaking app for start-ups and investors all over the world
        </Typography>
        <Button
          color="secondary"
          disabled={process.env.NEXT_PUBLIC_ENABLE_HOME_PAGE !== 'true'}
          size="large"
          variant="outlined"
          onClick={onSignInButtonClick}
        >
          Create an account
        </Button>
      </S.StyledSubHeaderWrapper>
    </S.StyledWrapper>
  );
};

import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { StringParam, useQueryParam } from 'use-query-params';

import { useModal } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

import { ERoutes } from '@enums';

import { SignInModalContent } from './atoms';
import S from './home.styles';

export const Home = (): JSX.Element => {
  const router = useRouter();
  const { Modal, show } = useModal();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const [codeQueryParam] = useQueryParam('code', StringParam);

  const isSignedIn = !!user && !isLoading;

  const onSignInButtonClick = () => {
    if (!isSignedIn) {
      return show();
    }

    router.push(user.client_type_id ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
  };

  const getHeadingVariant = () => {
    if (deviceData.isSmallerThanXS) {
      return 'h4';
    }

    if (deviceData.isSmallerThanSM) {
      return 'h3';
    }

    if (deviceData.isSmallerThanMD) {
      return 'h2';
    }

    return 'h1';
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
      <Typography fontWeight={700} sx={{ zIndex: 1 }} variant={getHeadingVariant()}>
        SWIPE &amp; MATCH
      </Typography>
      <S.StyledSubHeaderWrapper>
        <Typography
          fontWeight={700}
          sx={{ zIndex: 1 }}
          textAlign="center"
          variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
        >
          matchmaking app for start-ups and investors all over the world
        </Typography>
        <Button
          color="secondary"
          disabled={codeQueryParam !== 'yeti'}
          size="large"
          variant="outlined"
          onClick={onSignInButtonClick}
        >
          Create an account
        </Button>
        <Typography fontWeight={700} marginTop={3} sx={{ zIndex: 1 }} variant="body2">
          {'(Early access only for selected users)'}
        </Typography>
        <Typography fontWeight={700} sx={{ zIndex: 1 }} variant="body2">
          {'(Full release planned on 13 June 2022)'}
        </Typography>
      </S.StyledSubHeaderWrapper>
    </S.StyledWrapper>
  );
};
